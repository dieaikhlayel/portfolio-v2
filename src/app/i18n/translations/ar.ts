import { Translations } from './en';

// Typed against the English dictionary: a missing or extra key is a compile error.
export const ar: Translations = {
  meta: {
    title: 'ضياء إخليل | الملف الشخصي',
    description:
      'الملف الشخصي لضياء إخليل، مطوّر ويب متكامل لديه خبرة في الدعم الفني ومعرفة بالأمن السيبراني.',
  },
  a11y: {
    skipToContent: 'انتقل إلى المحتوى الرئيسي',
  },
  site: {
    name: 'ضياء إخليل',
  },
  home: {
    hero: {
      role: 'مطوّر ويب متكامل | دعم فني | أمن سيبراني',
      intro:
        'أطوّر تطبيقات الويب باستخدام تقنيات الواجهات الأمامية والخلفية، ولدي خبرة في الدعم الفني ومعرفة بأساسيات الأمن السيبراني. أستمتع بحل المشكلات التقنية، واستكشاف الأخطاء وإصلاحها، وتطوير حلول آمنة وموثوقة وسهلة الاستخدام. تصفّح مشاريعي أو تواصل معي.',
      viewProjects: 'عرض المشاريع',
      contactMe: 'تواصل معي',
    },
    skills: {
      title: 'المهارات',
      intro: 'تقنيات عملت بها في مشاريعي وتدريبي.',
      groups: {
        frontend: 'الواجهات الأمامية',
        backend: 'الخلفية البرمجية',
        security: 'الشبكات والأمن',
        support: 'الدعم التقني وخدمة العملاء',
        tools: 'البيانات والأدوات',
      },
    },
  },
  about: {
    sections: {
      education: 'التعليم',
      experience: 'الخبرات',
      certificates: 'الشهادات',
      languages: 'اللغات',
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
