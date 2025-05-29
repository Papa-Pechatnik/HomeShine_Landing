import { defineCollection, z } from 'astro:content';

const contactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    youtube: z.string(),
    telegram: z.string(),
  }),
});

export const collections = {
  'information': contactCollection,
}