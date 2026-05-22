import { company } from '../data/company';

export type SEOMeta = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  locale?: 'en' | 'ar';
  alternateLocaleHref?: string;
};

const SITE_URL = company.url;
const DEFAULT_OG = '/og/default.svg';

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const sep = path.startsWith('/') ? '' : '/';
  return `${SITE_URL}${sep}${path}`;
}

export function pageTitle(title: string, suffix = company.legalName): string {
  if (!title) return suffix;
  if (title.toLowerCase().includes(company.shortName.toLowerCase())) return title;
  return `${title} — ${suffix}`;
}

export function buildHreflangs(pathname: string): Array<{ rel: 'alternate'; hrefLang: string; href: string }> {
  const isArabic = pathname.startsWith('/ar/') || pathname === '/ar';
  const englishPath = isArabic ? pathname.replace(/^\/ar/, '') || '/' : pathname;
  const arabicPath = isArabic ? pathname : `/ar${pathname === '/' ? '' : pathname}`;
  return [
    { rel: 'alternate', hrefLang: 'en', href: absoluteUrl(englishPath) },
    { rel: 'alternate', hrefLang: 'ar', href: absoluteUrl(arabicPath) },
    { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(englishPath) },
  ];
}

export function organisationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#organization'),
    name: company.legalName,
    alternateName: company.arabicName,
    url: SITE_URL,
    logo: absoluteUrl('/assets/logo.png'),
    image: absoluteUrl(DEFAULT_OG),
    description:
      'Al Batra Management Consultancy is a UAE-based ISO certification consultancy delivering implementation, documentation, internal audits and training across QMS, EMS, OHSMS, FSMS, ISMS, IMS and sector-specific standards.',
    foundingDate: String(company.founded),
    email: company.email,
    telephone: company.phones[0]?.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: company.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      ...['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (city) => ({ '@type': 'City', name: city })
      ),
    ],
    sameAs: [company.socials.linkedin].filter(Boolean),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceJsonLd(opts: {
  code: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${opts.code} Implementation Consulting`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    provider: { '@id': absoluteUrl('/#organization') },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    audience: { '@type': 'BusinessAudience', audienceType: 'UAE organisations seeking ISO certification' },
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(opts.url) },
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': absoluteUrl('/#organization') },
    datePublished: opts.publishedAt.toISOString(),
    dateModified: (opts.updatedAt ?? opts.publishedAt).toISOString(),
    image: opts.image ? absoluteUrl(opts.image) : absoluteUrl(DEFAULT_OG),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}
