import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { html } from 'satori-html';
import fs from 'node:fs';
import path from 'node:path';

interface PageData {
  title: string;
  description: string;
}

const updates = await getCollection('updates', ({ data }) => data.isPublished);

const pages: Record<string, PageData> = {};

for (const post of updates) {
  pages[`updates/${post.data.categoryPlural}/${post.id}`] = {
    title: post.data.title,
    description: post.data.category,
  };
}

pages['index'] = {
  title: 'All in for Sport',
  description: 'A Coordi-nation for grassroots sports projects',
};
pages['about'] = {
  title: 'About',
  description: 'Our mission to empower communities through sport',
};
pages['updates'] = {
  title: 'Updates',
  description: 'Latest news from All in for Sport',
};

// Load fonts at module level
const fontBold = fs.readFileSync(
  path.resolve('./node_modules/@fontsource/red-hat-display/files/red-hat-display-latin-700-normal.woff')
);
const fontRegular = fs.readFileSync(
  path.resolve('./node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff')
);

export const getStaticPaths: GetStaticPaths = () => {
  return Object.keys(pages).map((slug) => ({
    params: { slug },
  }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug as string;
  const page = pages[slug];
  if (!page) return new Response('Not found', { status: 404 });

  const markup = html`
    <div
      style="display: flex; flex-direction: column; justify-content: flex-end; width: 1200px; height: 630px; padding: 60px; background: linear-gradient(135deg, #111111 0%, #1f2937 100%); border-left: 6px solid #2AA0F6;"
    >
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; font-size: 28px; color: #2AA0F6; text-transform: uppercase; letter-spacing: 2px;">
          ${page.description}
        </div>
        <div style="display: flex; font-size: 56px; color: white; font-weight: 700; line-height: 1.2;">
          ${page.title}
        </div>
        <div style="display: flex; font-size: 22px; color: rgba(255,255,255,0.5); margin-top: 16px;">
          allinforsport.org
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Red Hat Display',
        data: fontBold,
        weight: 700,
        style: 'normal',
      },
      {
        name: 'DM Sans',
        data: fontRegular,
        weight: 400,
        style: 'normal',
      },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
