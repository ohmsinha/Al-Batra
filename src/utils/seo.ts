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
    '@type': ['ProfessionalService', 'LocalBusiness', 'Consultant'],
    '@id': absoluteUrl('/#organization'),
    name: company.legalName,
    alternateName: company.arabicName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/assets/logo.png'),
      width: 400,
      height: 120,
    },
    image: absoluteUrl(DEFAULT_OG),
    description:
      'Al Batra Management Consultancy is a UAE-based ISO certification implementation consultancy. We take organisations through the full ISO certification cycle — gap analysis, documentation, internal audit and Stage 1/2 certification body support — on a fixed fee, with bilingual English + Arabic documentation. Headquartered in Sharjah, with on-site consultants across all seven emirates. Founded 2013. Over 600 UAE organisations served across 27 ISO standards. Sharjah Municipality–approved provider for GHP training.',
    slogan: 'ISO certification, implemented to pass audit.',
    foundingDate: String(company.founded),
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sharjah',
        addressCountry: 'AE',
      },
    },
    email: company.email,
    telephone: company.phones[0]?.tel,
    contactPoint: company.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: p.tel,
      contactType: p.label === 'Office' ? 'customer service' : 'sales',
      areaServed: ['AE', 'GCC'],
      availableLanguage: ['English', 'Arabic'],
    })),
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      ...['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (city) => ({ '@type': 'City', name: city, containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' } })
      ),
      { '@type': 'Place', name: 'Gulf Cooperation Council', alternateName: 'GCC' },
    ],
    priceRange: 'AED 5,000 – AED 210,000',
    paymentAccepted: 'Cash, Bank Transfer, Credit Card',
    currenciesAccepted: 'AED, USD',
    knowsAbout: [
      'ISO 9001 implementation',
      'ISO 14001 environmental management',
      'ISO 45001 occupational health and safety',
      'ISO 22000 food safety management',
      'HACCP',
      'ISO 27001 information security management',
      'ISO 27701 privacy information management',
      'ISO 22301 business continuity',
      'ISO 50001 energy management',
      'ISO 13485 medical devices QMS',
      'ISO 17025 laboratory accreditation',
      'Integrated management systems',
      'Internal audit',
      'Management review',
      'Stage 1 and Stage 2 certification audit preparation',
      'Sharjah Municipality GHP training',
      'Bilingual ISO documentation (English and Arabic)',
    ],
    award: 'Sharjah Municipality–approved GHP training provider',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    serviceType: 'ISO Certification Implementation Consulting',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ISO Certification Implementation',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gap Analysis', description: 'Clause-by-clause on-site audit of an organisation against the target ISO standard, with a written report and indicative implementation plan.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISO Implementation', description: 'Full five-phase ISO implementation engagement on a fixed fee — gap analysis, documentation, implementation, internal audit, certification body support.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integrated Management Systems', description: 'A single management system covering multiple ISO standards (e.g. ISO 9001 + 14001 + 45001) — one manual, one audit cycle, one management review.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GHP Training', description: 'Good Hygiene Practice training for food handlers and staff/manager grades — Sharjah Municipality–approved.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Internal Auditor Training', description: 'Internal-auditor training for nominated staff across one or more ISO standards.' } },
      ],
    },
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
  /** Optional emirate scope for service × emirate location pages */
  emirate?: string;
}) {
  const emirateAreas = opts.emirate
    ? [{ '@type': 'City', name: opts.emirate, containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' } }]
    : [
        { '@type': 'Country', name: 'United Arab Emirates' },
        ...['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
          (city) => ({ '@type': 'City', name: city })
        ),
      ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${opts.code} Implementation Consulting`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    provider: { '@id': absoluteUrl('/#organization') },
    areaServed: emirateAreas,
    audience: { '@type': 'BusinessAudience', audienceType: 'UAE organisations seeking ISO certification' },
    serviceOutput: 'Audit-ready management system documentation, internal audit completion, Stage 1 and Stage 2 certification body support',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'AED',
        description: 'Fixed-fee engagement. Indicative range AED 45,000–120,000 for a single standard; scoped on engagement specifics.',
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': absoluteUrl('/#organization') },
    },
    category: 'ISO certification consulting',
    brand: { '@id': absoluteUrl('/#organization') },
  };
}

export function personJsonLd(opts: {
  name: string;
  jobTitle?: string;
  bio?: string;
  url?: string;
  linkedin?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.bio,
    url: opts.url ? absoluteUrl(opts.url) : undefined,
    worksFor: { '@id': absoluteUrl('/#organization') },
    sameAs: opts.linkedin ? [opts.linkedin] : undefined,
  };
}

export function localBusinessLocationJsonLd(opts: {
  emirate: string;
  serviceName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': absoluteUrl(`/#location-${opts.emirate.toLowerCase().replace(/\s+/g, '-')}`),
    name: `${company.legalName} — ${opts.serviceName} in ${opts.emirate}`,
    parentOrganization: { '@id': absoluteUrl('/#organization') },
    url: SITE_URL,
    telephone: company.phones[0]?.tel,
    email: company.email,
    image: absoluteUrl('/assets/logo.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressCountry: 'AE',
    },
    areaServed: { '@type': 'City', name: opts.emirate },
    priceRange: 'AED 5,000 – AED 210,000',
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
