/**
 * Canonical company facts. Update here once when verified
 * and the change propagates everywhere (header, footer, JSON-LD, contact page).
 *
 * Items flagged with `unverified: true` should be confirmed with the client
 * before final launch — see README.md for the verification checklist.
 */

export const company = {
  legalName: 'Al Batra Management Consultancy',
  shortName: 'Al Batra',
  arabicName: 'البتراء للاستشارات الإدارية',
  tagline: 'ISO certification, implemented to pass audit.',
  taglineAr: 'شهادات الأيزو، تطبيقًا يجتاز التدقيق.',
  url: 'https://albatraconsultants.com',
  founded: 2013,
  yearsInMarket: 'more than ten years',
  phones: [
    { label: 'Office', tel: '+97165755601', display: '+971 6 575 5601' },
    { label: 'Mobile', tel: '+971564091521', display: '+971 56 4091521' },
  ],
  email: 'info@albatraconsultants.com',
  address: {
    line1: 'Office 514, Rolla Mall',
    line2: 'Rolla Square Park',
    city: 'Sharjah',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Sharjah',
    postalCode: '',
  },
  geo: {
    latitude: 25.358,
    longitude: 55.385,
    unverified: true,
  },
  openingHours: 'Sunday to Thursday, 09:00 to 18:00 (GST)',
  socials: {
    linkedin: 'https://www.linkedin.com/company/al-batra-management-consultancy',
    unverified: true,
  },
  positioning: {
    coverage: 'UAE-wide',
    priorityMarkets: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    secondaryMarkets: ['Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'GCC'],
  },
  trustClaims: {
    organisationsServed: '600+',
    standardsCovered: 27,
    unverified: true,
  },
} as const;

export type Company = typeof company;
