import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const seoSchema = (image: any) =>
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: z.object({
            src: image().optional(),
            alt: z.string().optional()
        })
            .optional(),
        pageType: z.enum(['website', 'article']).default('website')
    });

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        cover: image().optional(),
        tags: z.array(z.string()).default([]),
        seo: seoSchema(image).optional()
    })
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        seo: seoSchema(image).optional()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        cover: image().optional(),
        company: z.string().optional(),
        seo: seoSchema(image).optional()
    })
});

export const collections = { blog, pages, projects };
