export type NavItem = {
  href: string;
  label: string;
  labelAr?: string;
};

export const primaryNav: NavItem[] = [
  { href: '/services', label: 'Services', labelAr: 'الخدمات' },
  { href: '/industries', label: 'Industries', labelAr: 'القطاعات' },
  { href: '/case-studies', label: 'Case studies', labelAr: 'دراسات الحالة' },
  { href: '/methodology', label: 'Methodology', labelAr: 'المنهجية' },
  { href: '/insights', label: 'Insights', labelAr: 'المقالات' },
  { href: '/about', label: 'About', labelAr: 'عن البتراء' },
];

export const footerServices: NavItem[] = [
  { href: '/services/iso-9001', label: 'Quality (ISO 9001)' },
  { href: '/services/iso-14001', label: 'Environment (ISO 14001)' },
  { href: '/services/iso-45001', label: 'Health & Safety (ISO 45001)' },
  { href: '/services/iso-22000', label: 'Food Safety (ISO 22000)' },
  { href: '/services/iso-27001', label: 'Information Security (ISO 27001)' },
  { href: '/services', label: 'All 27 standards →' },
];

export const footerCompany: NavItem[] = [
  { href: '/about', label: 'About Al Batra' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/industries', label: 'Industries' },
  { href: '/coverage', label: 'UAE coverage' },
  { href: '/pricing', label: 'Pricing & engagement' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export const footerResources: NavItem[] = [
  { href: '/faq', label: 'Frequently asked' },
  { href: '/privacy', label: 'Privacy notice' },
  { href: '/terms', label: 'Terms of engagement' },
];
