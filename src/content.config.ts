import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const updates = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string().optional(),
    date: z.coerce.date(),
    author: z.string(),
    authorEns: z.string().optional(),
    authorEnsAvatar: z.boolean().optional(),
    isPublished: z.boolean(),
    isFeatured: z.boolean().optional(),
    group: z.string().optional(),
    category: z.string(),
    categoryPlural: z.string(),
    featuredImage: z.string().optional(),
    featuredImageAltText: z.string().optional(),
  }),
});

export const collections = { updates };
