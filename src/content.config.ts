import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { updatesCompositeLoader } from './loaders/composite';

const updates = defineCollection({
  loader: updatesCompositeLoader(),
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
