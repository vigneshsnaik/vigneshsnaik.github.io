import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      priority: z.coerce.number(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
