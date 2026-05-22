import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    family: z.enum(['QMS', 'EMS', 'OHSMS', 'FSMS', 'ISMS', 'IMS', 'Sector']),
    summary: z.string(),
    description: z.string(),
    order: z.number().default(50),
    timeline: z.string().default('8–12 weeks'),
    engagementModel: z.string().default('Fixed fee'),
    onSiteCadence: z.string().default('Weekly'),
    documentationLanguages: z.string().default('English + Arabic'),
    industries: z.array(z.string()).default([]),
    relatedStandards: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
    needsVerification: z.array(z.string()).default([]),
  }),
});

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    codes: z.array(z.string()),
    order: z.number().default(50),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
    needsVerification: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tag: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().default('General'),
    order: z.number().default(50),
  }),
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    industrySlug: z.string().optional(),
    location: z.string(),
    standards: z.array(z.string()),
    summary: z.string(),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),
    timeline: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),
    publishedAt: z.date(),
    order: z.number().default(50),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    needsVerification: z.array(z.string()).default([]),
  }),
});

export const collections = { services, industries, blog, faq, cases };
