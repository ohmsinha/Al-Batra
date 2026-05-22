/**
 * Standards roster used on the services hub page.
 *
 * The full 27-standard inventory referenced in the brand brief is captured here
 * and grouped by family. Individual service detail pages exist for the high-traffic
 * standards (see src/content/services/); the rest are listed in the roster with
 * inquiry CTAs.
 */

export type StandardEntry = {
  code: string;
  title: string;
  slug?: string;
  family: 'QMS' | 'EMS' | 'OHSMS' | 'FSMS' | 'ISMS' | 'IMS' | 'Sector';
};

export const standards: StandardEntry[] = [
  { code: 'ISO 9001', title: 'Quality Management Systems', slug: 'iso-9001', family: 'QMS' },
  { code: 'ISO 14001', title: 'Environmental Management', slug: 'iso-14001', family: 'EMS' },
  { code: 'ISO 45001', title: 'Occupational Health & Safety', slug: 'iso-45001', family: 'OHSMS' },
  { code: 'ISO 22000', title: 'Food Safety Management', slug: 'iso-22000', family: 'FSMS' },
  { code: 'ISO 27001', title: 'Information Security Management', slug: 'iso-27001', family: 'ISMS' },
  { code: 'ISO 13485', title: 'Medical Devices QMS', slug: 'iso-13485', family: 'Sector' },
  { code: 'ISO 17025', title: 'Testing & Calibration Laboratories', slug: 'iso-17025', family: 'Sector' },
  { code: 'ISO 22301', title: 'Business Continuity Management', slug: 'iso-22301', family: 'IMS' },
  { code: 'ISO 50001', title: 'Energy Management Systems', slug: 'iso-50001', family: 'EMS' },

  { code: 'ISO 15189', title: 'Medical Laboratories', family: 'Sector' },
  { code: 'ISO 21001', title: 'Educational Organisation Management', family: 'Sector' },
  { code: 'ISO 41001', title: 'Facility Management', family: 'Sector' },
  { code: 'ISO 20121', title: 'Event Sustainability Management', family: 'Sector' },
  { code: 'ISO 37001', title: 'Anti-Bribery Management', family: 'IMS' },
  { code: 'ISO 31000', title: 'Risk Management', family: 'IMS' },
  { code: 'ISO 28000', title: 'Supply Chain Security', family: 'IMS' },
  { code: 'ISO 39001', title: 'Road Traffic Safety Management', family: 'Sector' },
  { code: 'ISO 22716', title: 'Cosmetics GMP', family: 'Sector' },
  { code: 'ISO 13053', title: 'Six Sigma Methodology', family: 'QMS' },
  { code: 'ISO 19011', title: 'Auditing Management Systems', family: 'QMS' },
  { code: 'ISO 10002', title: 'Customer Satisfaction & Complaints', family: 'QMS' },
  { code: 'ISO 26000', title: 'Social Responsibility', family: 'IMS' },
  { code: 'ISO 30301', title: 'Records Management', family: 'IMS' },
  { code: 'ISO 29993', title: 'Learning Services Outside Formal Education', family: 'Sector' },
  { code: 'ISO 55001', title: 'Asset Management', family: 'IMS' },
  { code: 'ISO 18788', title: 'Security Operations Management', family: 'Sector' },
  { code: 'ISO 27701', title: 'Privacy Information Management', family: 'ISMS' },
];

export const standardFamilies: Array<{ id: StandardEntry['family']; title: string; desc: string }> = [
  { id: 'QMS', title: 'Quality Management', desc: 'ISO 9001 and the methodologies that build on it — auditing, customer satisfaction, Six Sigma.' },
  { id: 'EMS', title: 'Environment & Energy', desc: 'Environmental impact registers, legal evaluation, and energy management aligned with UAE policy.' },
  { id: 'OHSMS', title: 'Occupational Health & Safety', desc: 'Risk-based safety management for construction, manufacturing, hospitality and facilities.' },
  { id: 'FSMS', title: 'Food Safety', desc: 'HACCP-based food safety, GHP and integrated quality–safety systems for hotels, kitchens and manufacturers.' },
  { id: 'ISMS', title: 'Information Security & Privacy', desc: 'ISMS, Statement of Applicability, and privacy information management for UAE professional services.' },
  { id: 'IMS', title: 'Integrated, Risk & Continuity', desc: 'Integrated management systems, risk, business continuity, anti-bribery and asset management.' },
  { id: 'Sector', title: 'Sector-specific standards', desc: 'Medical devices, laboratories, facility management, education, events, cosmetics and more.' },
];
