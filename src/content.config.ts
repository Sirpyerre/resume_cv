import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const categories = [
  "SEO Local",
  "Casos de Estudio",
  "Desarrollo Web",
  "PyMEs",
  "Emprendimiento",
] as const

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    slug: z.string().optional(),
    categories: z.array(z.enum(categories)).min(1),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    coverLabel: z.string().optional(),
  }),
})

export const collections = {
  blog,
}
