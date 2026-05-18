import type { Loader } from 'astro/loaders';
import Parser from 'rss-parser';

type CustomItem = {
  title?: string;
  description?: string;
  contentSnippet?: string;
  link?: string;
  pubDate?: string;
  creator?: string;
  enclosure?: { url?: string };
  'content:encoded'?: string;
  content?: string;
};

interface SubstackLoaderOptions {
  /** RSS feed URL (e.g. https://allinforsport.substack.com/feed) */
  url: string;
  /** Whether to filter out placeholder posts (e.g. "Coming soon") — default true */
  filterPlaceholders?: boolean;
}

/**
 * Astro content loader that fetches Substack RSS feed entries
 * and adds them to the collection at build time.
 *
 * - HTML is cleaned of Substack cruft and stored as-is (no Markdown conversion)
 * - Cover photo (from RSS enclosure) is deduplicated from body content
 * - Image links are unwrapped so broken markdown fragments don't appear
 */
export function substackLoader(options: SubstackLoaderOptions): Loader {
  const { url, filterPlaceholders = true } = options;

  return {
    name: 'substack-rss',

    load: async ({ store, logger }) => {
      logger.info(`Fetching Substack RSS: ${url}`);

      try {
        const parser = new Parser<Record<string, unknown>, CustomItem>({
          customFields: { item: ['content:encoded'] },
        });
        const feed = await parser.parseURL(url);

        if (!feed.items?.length) {
          logger.warn('No items found in RSS feed');
          return;
        }

        // Sort by pubDate descending so newest is first
        const sorted = [...feed.items].sort(
          (a, b) =>
            new Date(b.pubDate ?? 0).getTime() -
            new Date(a.pubDate ?? 0).getTime(),
        );

        for (const [index, item] of sorted.entries()) {
          // Skip placeholder posts
          if (filterPlaceholders && isPlaceholder(item)) {
            logger.info(`Skipping placeholder post: "${item.title}"`);
            continue;
          }

          const slug = extractSlug(item.link);
          if (!slug) {
            logger.warn(`Could not extract slug from link: ${item.link}`);
            continue;
          }

          const rawHtml = item['content:encoded'] || item.content || '';
          const featuredImage = extractFeaturedImage(item);

          // Clean and deduplicate body HTML
          const cleanedHtml = cleanSubstackHtml(rawHtml, featuredImage);

          const date = item.pubDate ? new Date(item.pubDate) : new Date();

          store.set({
            id: slug,
            data: {
              title: item.title || 'Untitled',
              metaDescription:
                item.contentSnippet?.slice(0, 160) ||
                item.description?.slice(0, 160) ||
                '',
              date,
              author: item.creator || 'All In For Sport',
              isPublished: true,
              isFeatured: index === 0, // newest post is featured
              category: 'article',
              categoryPlural: 'articles',
              featuredImage,
              featuredImageAltText: '',
            },
            body: cleanedHtml,
            rendered: { html: cleanedHtml },
          });
        }

        logger.info(
          `Loaded ${store.entries().length} post(s) from Substack RSS`,
        );
      } catch (error) {
        logger.error(
          `Substack RSS loader failed: ${error instanceof Error ? error.message : String(error)}`,
        );
        // Don't throw — let the build continue with whatever entries exist
      }
    },
  };
}

/** Extract the post slug from the Substack post URL */
function extractSlug(link?: string): string | null {
  if (!link) return null;
  try {
    const url = new URL(link);
    const segments = url.pathname.replace(/\/$/, '').split('/');
    const last = segments[segments.length - 1];
    return last || null;
  } catch {
    return null;
  }
}

/** Substack "Coming soon" post or posts with trivially short content */
function isPlaceholder(item: CustomItem): boolean {
  const title = (item.title || '').toLowerCase().trim();
  if (title === 'coming soon') return true;

  const snippet = (item.contentSnippet || '').trim();
  if (snippet.length < 50) return true;

  return false;
}

/** Extract featured image URL from RSS enclosure or first content image */
function extractFeaturedImage(item: CustomItem): string | undefined {
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }

  const html = item['content:encoded'] || item.content || '';
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  if (match) {
    return match[1];
  }

  return undefined;
}

/**
 * Extract the base image filename/identifier from a Substack CDN URL.
 * Substack images are served via their CDN with processing params, but the
 * underlying image has a stable identifier at the end of the path.
 */
function extractImageIdentifier(url: string): string | null {
  const decoded = decodeURIComponent(url);
  const segments = decoded.split('/');
  const last = segments[segments.length - 1];
  // Substack image filenames look like: 038ed391-d902-49eb-b4da-042bb54d844d_810x813.jpeg
  if (last && /\w{8}-/.test(last)) {
    return last;
  }
  return null;
}

/**
 * Clean Substack-specific HTML cruft.
 *
 * Steps:
 * 1. Unwrap images from Substack's <a class="image-link"> link wrappers
 * 2. Simplify captioned-image-container blocks to bare <img> tags
 * 3. Remove the cover photo from body if it duplicates the featured image
 * 4. Remove subscription button wrappers
 * 5. Remove the "Follow along" CTA footer section
 * 6. Decode HTML entities
 */
function cleanSubstackHtml(html: string, featuredImage?: string): string {
  let cleaned = html;

  // 1. Unwrap image links — Substack wraps images in <a class="image-link">
  // that contains nested divs/figure/picture. Strip the <a> wrapper entirely.
  cleaned = cleaned.replace(
    /<a[^>]*class="[^"]*image-link[^"]*"[^>]*>([\s\S]*?)<\/a>/gi,
    (_, inner) => inner,
  );

  // 2. Simplify captioned-image-container blocks.
  // After unwrapping links, the structure is:
  // <div class="captioned-image-container"><figure><div class="image2-inset">
  //   <picture><source ...><img src="..." ...></picture>
  //   <div class="image-link-expand">...</div>
  // </div></figure></div>
  // Match the FULL outer container and reduce to bare <img>.
  cleaned = cleaned.replace(
    /<div class="captioned-image-container"><figure><div class="image2-inset">[\s\S]*?<img([^>]+)>[\s\S]*?<\/div><\/figure><\/div>/gi,
    (_, imgAttrs) => `<img${imgAttrs}>`,
  );

  // 3. Remove cover photo from body if it duplicates the featured image
  if (featuredImage) {
    const identifier = extractImageIdentifier(featuredImage);
    if (identifier) {
      // Remove the first <img> whose src contains this identifier
      const imgPattern = new RegExp(
        `<img[^>]+src="[^"]*${identifier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"]*"[^>]*>`,
        'i',
      );
      cleaned = cleaned.replace(imgPattern, '');
    }
  }

  // 4. Remove subscription button wrappers
  cleaned = cleaned.replace(
    /<p class="button-wrapper"[^>]*>[\s\S]*?<\/p>/gi,
    '',
  );

  // 5. Remove the "Follow along" CTA section and everything after it
  cleaned = cleaned.replace(
    /<h2>\s*&#128236;\s*Follow along\s*<\/h2>[\s\S]*$/i,
    '',
  );

  // 6. Remove trailing horizontal rules
  cleaned = cleaned.replace(/<div><hr><\/div>\s*$/i, '');
  cleaned = cleaned.replace(/<hr\s*\/?>\s*$/i, '');

  // 7. Decode common HTML entities
  cleaned = cleaned.replace(/&#8217;/g, "'");
  cleaned = cleaned.replace(/&#8220;/g, '"');
  cleaned = cleaned.replace(/&#8221;/g, '"');
  cleaned = cleaned.replace(/&#8211;/g, '–');
  cleaned = cleaned.replace(/&#8212;/g, '—');
  cleaned = cleaned.replace(/&#8230;/g, '…');
  cleaned = cleaned.replace(/&#160;/g, ' ');
  cleaned = cleaned.replace(/&#38;/g, '&');
  cleaned = cleaned.replace(/&#60;/g, '<');
  cleaned = cleaned.replace(/&#62;/g, '>');

  return cleaned.trim();
}
