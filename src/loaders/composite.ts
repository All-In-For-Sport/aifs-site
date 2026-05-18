import { glob } from 'astro/loaders';
import type { Loader } from 'astro/loaders';
import { substackLoader } from './substack';

/**
 * Composite loader that merges local MDX files (via glob) with
 * Substack RSS feed entries into a single `updates` collection.
 *
 * Local MDX files in src/content/updates/ take precedence on ID collisions.
 */
export function updatesCompositeLoader(): Loader {
  const globLoader = glob({ pattern: '**/*.mdx', base: './src/content/updates' });
  const substack = substackLoader({
    url: 'https://allinforsport.substack.com/feed',
  });

  return {
    name: 'updates-composite',

    load: async (context) => {
      // 1. Load local MDX files
      await globLoader.load(context);

      // 2. Load Substack RSS entries (local IDs take priority if same slug)
      await substack.load(context);
    },
  };
}
