/**
 * Emirate-specific context used by the programmatic /services/[slug]/[emirate]/ pages.
 *
 * Keep entries factual and verifiable. Where data is unverified, flag it in the
 * service-detail page (the SEO strategy doc tracks the verification queue).
 */

export type EmirateKey = 'dubai' | 'abu-dhabi' | 'sharjah' | 'ajman';

export type Emirate = {
  slug: EmirateKey;
  name: string;
  nameAr: string;
  /** Short "why this emirate" line for hero copy */
  positioning: string;
  /** Regulators and authorities relevant to ISO certification in this emirate */
  regulators: string[];
  /** Sector mix descriptor — what kinds of clients dominate in this emirate */
  sectorMix: string;
  /** Common free zones / business clusters worth mentioning */
  clusters: string[];
  /** Travel logistics from Sharjah HQ */
  travelNote: string;
};

export const emirates: Record<EmirateKey, Emirate> = {
  dubai: {
    slug: 'dubai',
    name: 'Dubai',
    nameAr: 'دبي',
    positioning:
      'Dubai is the UAE’s largest commercial centre and the most certification-active emirate. Most ISO 27001, ISO 22000, ISO 9001 and integrated-system engagements in the UAE originate or terminate here.',
    regulators: ['Dubai Municipality', 'Dubai Health Authority (DHA)', 'DCAS', 'DIFC Authority', 'DMCC', 'RTA'],
    sectorMix: 'Heavy in hospitality, retail, financial services (DIFC), logistics, real estate, FinTech, and professional services.',
    clusters: ['DIFC', 'DMCC', 'Dubai Internet City', 'JAFZA', 'Dubai South', 'Dubai Healthcare City'],
    travelNote: 'Sharjah HQ to most Dubai sites is 35–55 minutes — standard weekly on-site cadence.',
  },
  'abu-dhabi': {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    nameAr: 'أبوظبي',
    positioning:
      'Abu Dhabi is the federal capital and the heart of UAE energy, infrastructure and government-tender activity. ISO 14001, ISO 45001, ISO 50001 and ISO 9001 dominate the engagement mix here.',
    regulators: ['Abu Dhabi Department of Health (DOH)', 'Environment Agency Abu Dhabi (EAD)', 'ADQCC', 'ADGM', 'Department of Municipalities and Transport'],
    sectorMix: 'Heavy in energy & utilities (ADNOC ecosystem), construction & infrastructure, government services, healthcare, and aviation.',
    clusters: ['ADGM (Al Maryah Island)', 'Masdar City', 'KIZAD', 'Industrial City of Abu Dhabi'],
    travelNote: 'Sharjah HQ to Abu Dhabi sites is 90–110 minutes — weekly on-site with overnight where engagement intensity demands it.',
  },
  sharjah: {
    slug: 'sharjah',
    name: 'Sharjah',
    nameAr: 'الشارقة',
    positioning:
      'Sharjah is our home emirate. The municipality approved Al Batra as a GHP training provider, and we maintain the densest engagement coverage here — manufacturing, hospitality, food production, education and free zone operations.',
    regulators: ['Sharjah City Municipality', 'Sharjah Health Authority', 'Sharjah Chamber of Commerce', 'Hamriyah Free Zone Authority', 'SAIF Zone'],
    sectorMix: 'Strong in manufacturing (industrial fabrication, packaging, food production), hospitality, education, and free-zone operators (SAIF, Hamriyah).',
    clusters: ['SAIF Zone', 'Hamriyah Free Zone', 'Sharjah Publishing City', 'Sharjah Media City (Shams)'],
    travelNote: 'Sharjah HQ is on Rolla — most Sharjah engagements are inside a 30-minute drive. On-site multiple times per week without timetable impact.',
  },
  ajman: {
    slug: 'ajman',
    name: 'Ajman',
    nameAr: 'عجمان',
    positioning:
      'Ajman hosts a growing manufacturing and SME base alongside the Ajman Free Zone. ISO 9001, ISO 14001 and integrated quality–environment systems are the most frequently requested.',
    regulators: ['Ajman Municipality', 'Ajman Free Zone Authority (AFZA)', 'Ajman Chamber of Commerce'],
    sectorMix: 'Manufacturing, free-zone trading, SME services, and hospitality.',
    clusters: ['Ajman Free Zone', 'New Industrial Area'],
    travelNote: 'Sharjah HQ to Ajman is 20–30 minutes — comparable to our Sharjah operating radius.',
  },
};

export const emirateOrder: EmirateKey[] = ['dubai', 'abu-dhabi', 'sharjah', 'ajman'];

/**
 * Which standards get a programmatic emirate landing page. Top 5 most-searched
 * standards in the UAE market. Expand only if these earn organic traffic.
 */
export const programmaticServices: string[] = [
  'iso-9001',
  'iso-14001',
  'iso-45001',
  'iso-22000',
  'iso-27001',
];
