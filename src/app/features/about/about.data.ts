import { Localized } from '../../i18n/localized';

export interface AboutEntry {
  readonly title: Localized;
  readonly org: Localized;
  readonly period?: Localized;
}

export interface LanguageSkill {
  readonly name: Localized;
  readonly level: Localized;
}

/**
 * Everything shown on the About page. Edit this file to change it.
 * Official course and company names with no `ar` stay in English on the Arabic site.
 * Section headings live in the dictionaries (about.sections).
 */
export const EDUCATION: readonly AboutEntry[] = [
  {
    title: {
      en: "Bachelor's degree in Computer Network Security",
      ar: 'بكالوريوس في أمن شبكات الحاسوب',
    },
    org: { en: 'Hebron University', ar: 'جامعة الخليل' },
    period: { en: 'Graduated 2023', ar: 'تخرّج عام 2023' },
  },
  {
    title: { en: 'Full Stack JavaScript Nanodegree' },
    org: { en: 'Udacity' },
    period: { en: '2025', ar: '2025' },
  },
];

export const EXPERIENCE: readonly AboutEntry[] = [
  {
    title: { en: 'Frontend Developer', ar: 'مطوّر واجهات أمامية' },
    org: {
      en: 'Digital journalism heritage preservation project',
      ar: 'مشروع الحفاظ على التراث الصحفي الرقمي',
    },
    period: { en: 'About 5 months', ar: 'حوالي 5 أشهر' },
  },
  {
    title: { en: 'IT support intern', ar: 'متدرّب دعم تقني' },
    org: { en: 'Hebron University', ar: 'جامعة الخليل' },
    period: { en: '2021', ar: '2021' },
  },
  {
    title: { en: 'IT support intern', ar: 'متدرّب دعم تقني' },
    org: { en: 'Hebron Electric', ar: 'كهرباء الخليل' },
    period: { en: '2021', ar: '2021' },
  },
];

export const CERTIFICATES: readonly AboutEntry[] = [
  {
    title: { en: 'Customer Service Fundamentals' },
    org: { en: 'Alison' },
    period: { en: '2025', ar: '2025' },
  },
  {
    title: { en: 'Introduction to Cybersecurity' },
    org: { en: 'Cisco' },
    period: { en: '2025', ar: '2025' },
  },
  {
    title: { en: 'Introduction to Modern AI' },
    org: { en: 'Cisco Networking Academy' },
    period: { en: '2026', ar: '2026' },
  },
];

export const LANGUAGES: readonly LanguageSkill[] = [
  {
    name: { en: 'Arabic', ar: 'العربية' },
    level: { en: 'Native', ar: 'اللغة الأم' },
  },
  {
    name: { en: 'English', ar: 'الإنجليزية' },
    level: { en: 'Upper-intermediate', ar: 'متوسط متقدم' },
  },
];
