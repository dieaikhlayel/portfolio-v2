export type SkillGroupId = 'frontend' | 'backend' | 'security' | 'support' | 'tools';

/**
 * One skill. Tool and technology names (Angular, PostgreSQL...) are proper nouns: give only `en`.
 * Topics that are ordinary words (Network security, IT support...) also give `ar`.
 */
export interface Skill {
  readonly en: string;
  readonly ar?: string;
}

export interface SkillGroup {
  readonly id: SkillGroupId;
  readonly items: readonly Skill[];
}

/**
 * Everything shown in the Skills section. Edit this list to change the section.
 * Only list what you have really used or studied. Group labels live in the dictionaries
 * (home.skills.groups).
 */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend',
    items: [
      { en: 'Angular' },
      { en: 'TypeScript' },
      { en: 'JavaScript' },
      { en: 'HTML and CSS' },
      { en: 'SCSS' },
      { en: 'React' },
    ],
  },
  {
    id: 'backend',
    items: [
      { en: 'Node.js' },
      { en: 'Express' },
      { en: 'Java' },
      { en: 'Spring Boot' },
      { en: 'Python' },
      { en: 'FastAPI' },
    ],
  },
  {
    id: 'security',
    items: [
      { en: 'Computer networking', ar: 'شبكات الحاسوب' },
      { en: 'Network security', ar: 'أمن الشبكات' },
      { en: 'Cybersecurity fundamentals', ar: 'أساسيات الأمن السيبراني' },
    ],
  },
  {
    id: 'support',
    items: [
      { en: 'IT support', ar: 'الدعم التقني' },
      { en: 'Customer service', ar: 'خدمة العملاء' },
    ],
  },
  {
    id: 'tools',
    items: [{ en: 'PostgreSQL' }, { en: 'Git' }, { en: 'Docker' }],
  },
];
