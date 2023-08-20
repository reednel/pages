import { defineCollection, z } from "astro:content";
import { array } from "prop-types";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Reed Nelson"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    complexity: z.number().default(1),
    draft: z.boolean().optional(),
  }),
});

// Drink collection schema
const drinkCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    spirits: z.array(z.string()).default(["none"]),
    bottles: z.array(z.string()).default(["none"]),
    tags: z.array(z.string()).default(["none"]),
    draft: z.boolean().optional(),
    ingredients: z.object({
      list: z.array(z.string()).optional(),
      qty: z.array(z.string()).optional(),
    }).optional(),
    instructions: z.array(z.string()).optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  drink: drinkCollection,
};
