export type SkillGroupId = 'frontend' | 'backend' | 'security' | 'systems' | 'support' | 'tools';

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
    ],
  },
  {
    id: 'security',
    items: [
      { en: 'Computer networking', ar: 'شبكات الحاسوب' },
      { en: 'TCP/IP', ar: 'بروتوكول TCP/IP' },
      { en: 'LAN and Wi-Fi diagnostics', ar: 'تشخيص شبكات LAN وWi-Fi' },
      { en: 'Cisco router configuration (CLI)', ar: 'إعداد راوترات Cisco عبر سطر الأوامر' },
      { en: 'Network security', ar: 'أمن الشبكات' },
      { en: 'Firewall configuration (UFW)', ar: 'إعداد جدار الحماية (UFW)' },
      { en: 'SSH hardening', ar: 'تأمين SSH' },
      { en: 'System log analysis', ar: 'تحليل سجلات النظام' },
      { en: 'Cybersecurity fundamentals', ar: 'أساسيات الأمن السيبراني' },
    ],
  },
  {
    id: 'systems',
    items: [
      { en: 'Windows' },
      { en: 'Linux (Ubuntu)' },
      { en: 'Windows deployment', ar: 'نشر أنظمة Windows' },
      { en: 'RAID storage', ar: 'تخزين RAID' },
      { en: 'VirtualBox' },
    ],
  },
  {
    id: 'support',
    items: [
      { en: 'IT support', ar: 'الدعم التقني' },
      {
        en: 'Hardware and software troubleshooting',
        ar: 'استكشاف أعطال العتاد والبرمجيات وإصلاحها',
      },
      { en: 'OS installation', ar: 'تثبيت أنظمة التشغيل' },
      { en: 'Technical documentation', ar: 'التوثيق التقني' },
      { en: 'Customer service', ar: 'خدمة العملاء' },
    ],
  },
  {
    id: 'tools',
    items: [{ en: 'PostgreSQL' }, { en: 'Git' }, { en: 'Docker' }],
  },
];
