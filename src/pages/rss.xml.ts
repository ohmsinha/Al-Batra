import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { company } from '../data/company';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return rss({
    title: `${company.legalName} — Insights`,
    description:
      'Long-form analysis on ISO certification and management systems for UAE organisations.',
    site: context.site ?? company.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.summary,
      link: `/insights/${post.slug}`,
      categories: [post.data.tag],
      author: company.email,
    })),
    customData: '<language>en-AE</language>',
  });
}
