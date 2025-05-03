import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
    caseStudies: z.array(z.object({
      title: z.string(),
      description: z.string(),
      results: z.array(z.string()),
    })).optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
    caseStudies: z.array(z.object({
      title: z.string(),
      description: z.string(),
      results: z.array(z.string()),
    })).optional(),
  }),
});

export const collections = {
  pages,
  services,
};
