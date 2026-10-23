import { Translations } from './en';

// Typed against the English dictionary: a missing or extra key is a compile error.
export const ar: Translations = {
  meta: {
    title: 'ضياء إخليل | الملف الشخصي',
    description: 'الملف الشخصي لـ ضياء إخليل، مطوّر ويب متكامل.',
  },
  a11y: {
    skipToContent: 'انتقل إلى المحتوى الرئيسي',
  },
  site: {
    name: 'ضياء إخليل',
  },
  home: {
    hero: {
      role: 'مطوّر واجهات أمامية ومطوّر ويب متكامل',
      intro:
        'أبني تطبيقات ويب، من واجهات Angular إلى واجهات البرمجة وقواعد البيانات التي تقف خلفها. تصفّح مشاريعي أو تواصل معي.',
      viewProjects: 'عرض المشاريع',
      contactMe: 'تواصل معي',
    },
  },

  theme: {
    label: 'المظهر',
    options: {
      system: 'النظام',
      light: 'ورقي (فاتح)',
      dark: 'فحمي (داكن)',
      midnight: 'منتصف الليل',
      forest: 'الغابة',
      ember: 'الجمر',
      violet: 'بنفسجي',
      contrast: 'تباين عالٍ',
      sand: 'رملي',
      ocean: 'المحيط',
      rose: 'وردي',
    },
  },
  language: {
    switchTo: 'تغيير اللغة',
  },
  nav: {
    primary: 'التنقل الرئيسي',
    menu: 'القائمة',
    projects: 'المشاريع',
    about: 'نبذة عني',
    contact: 'تواصل معي',
  },
  pages: {
    comingSoon: 'هذه الصفحة قادمة قريبًا.',
  },
  footer: {
    email: 'البريد الإلكتروني',
    note: 'بُني باستخدام Angular.',
  },
};
