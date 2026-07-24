import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const software = defineCollection({
  loader: glob({ base: './src/content/software', pattern: '**/*.{md,mdx}' }),
  schema: () => z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    website: z.string().url(),
    category: z.enum(['productivity','developer','design','writing','utility','media','communication','security','other']),
    platforms: z.array(z.enum(['mac','windows','linux','ios','android','web'])),
    type: z.enum(['gui','cli']).default('gui'),
    price: z.enum(['free','freemium','open-source','trial']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    logo: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
    version: z.string().optional(),
    download: z.string().optional(),
    install: z.object({
      homebrew: z.string().optional(),
      winget: z.string().optional(),
      apt: z.string().optional(),
      snap: z.string().optional(),
      flatpak: z.string().optional(),
      nix: z.string().optional(),
      choco: z.string().optional(),
      appstore: z.string().optional(),
      playstore: z.string().optional(),
    }).optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['tutorial','roundup','guide']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { software, articles };
