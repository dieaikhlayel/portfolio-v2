import { Localized } from '../../i18n/localized';

export interface Project {
  /** Short unique name used in code and tests. */
  readonly id: string;
  /** Featured projects are shown first, in the large section. */
  readonly featured: boolean;
  readonly name: Localized;
  readonly summary: Localized;
  /** Technologies, shown as tags. Proper names, so they are not translated. */
  readonly tech: readonly string[];
  /** A small label above the summary, e.g. "Learning project". */
  readonly badge?: Localized;
  /** An honest note about limits. Remove it once the limit is fixed. */
  readonly note?: Localized;
  readonly links: { readonly repo: string; readonly live?: string };
}

/**
 * Everything shown on the Projects page. Edit this file to change it.
 * Describe only what the repository really shows: open the repo and check the files have code.
 * Order here is the order on the page.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'finance-tracker',
    featured: true,
    name: { en: 'Finance Tracker' },
    summary: {
      en: 'A full-stack app for recording income and expenses: JWT accounts, categories, filterable and paginated transactions, and a dashboard of balances by category and month.',
      ar: 'تطبيق متكامل لتسجيل الدخل والمصروفات: حسابات بمصادقة JWT وفئات ومعاملات قابلة للتصفية والتقسيم إلى صفحات، ولوحة تعرض الأرصدة حسب الفئة والشهر.',
    },
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'MySQL', 'Zod', 'Docker'],
    note: {
      en: 'No automated tests yet.',
      ar: 'لا توجد اختبارات آلية بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/finance-tracker' },
  },
  {
    id: 'secure-task-manager',
    featured: true,
    name: { en: 'Secure Task Manager' },
    summary: {
      en: 'A task manager with JWT authentication and an audit log that records sign-ups, sign-ins and every task change. Spring Boot and Spring Security on the backend, React and TypeScript on the frontend.',
      ar: 'تطبيق لإدارة المهام بمصادقة JWT وسجل تدقيق يسجّل إنشاء الحسابات وتسجيل الدخول وكل تغيير في المهام. خلفية بـ Spring Boot وSpring Security وواجهة بـ React وTypeScript.',
    },
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'MySQL',
      'React',
      'TypeScript',
      'Redux Toolkit',
    ],
    note: {
      en: 'No automated tests yet.',
      ar: 'لا توجد اختبارات آلية بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/secure-task-manager' },
  },
  {
    id: 'deploymate',
    featured: true,
    name: { en: 'DeployMate' },
    summary: {
      en: 'A tool for deploying applications over SSH. It runs health checks after each deployment, can roll back, monitors servers and sends alerts, with a command-line interface and a small web app.',
      ar: 'أداة لنشر التطبيقات عبر SSH. تجري فحوصات صحة بعد كل عملية نشر، ويمكنها التراجع عن النشر، وتراقب الخوادم وترسل التنبيهات، مع واجهة سطر أوامر وتطبيق ويب صغير.',
    },
    tech: ['Python', 'SSH', 'Docker', 'GitHub Actions'],
    links: { repo: 'https://github.com/dieaikhlayel/deploymate' },
  },
  {
    id: 'packet-sniffer',
    featured: true,
    name: { en: 'Network Packet Sniffer', ar: 'ملتقط حزم الشبكة' },
    summary: {
      en: 'A Python tool that captures network packets with raw sockets and parses TCP, UDP and ICMP traffic. Its analyzer detects traffic bursts and unusual high port numbers and exports a JSON report.',
      ar: 'أداة بلغة Python تلتقط حزم الشبكة عبر المقابس الخام (raw sockets) وتحلّل حركة TCP وUDP وICMP. يكتشف المحلّل ارتفاع حركة البيانات المفاجئ وأرقام المنافذ العالية غير المعتادة ويصدّر تقريرًا بصيغة JSON.',
    },
    tech: ['Python', 'Raw sockets', 'Matplotlib'],
    note: {
      en: 'Capturing packets needs administrator (root) rights.',
      ar: 'التقاط الحزم يتطلب صلاحيات المسؤول (root).',
    },
    links: {
      repo: 'https://github.com/dieaikhlayel/Python_Projects/tree/main/Packet%20Sniffer',
    },
  },
  {
    id: 'palestinian-cultural-heritage',
    featured: true,
    name: { en: 'Palestinian Cultural Heritage', ar: 'التراث الثقافي الفلسطيني' },
    summary: {
      en: 'A multi-page website about Palestinian cultural heritage: 14 pages and more than 100 images, with a live demo.',
      ar: 'موقع متعدد الصفحات عن التراث الثقافي الفلسطيني: 14 صفحة وأكثر من 100 صورة، مع نسخة تجريبية مباشرة.',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    note: {
      en: 'Built on my own, with guidance from my teacher and help from AI coding assistants (ChatGPT and DeepSeek).',
      ar: 'بُني بجهدي الشخصي، بتوجيه من أستاذي وبمساعدة مساعدي البرمجة بالذكاء الاصطناعي (ChatGPT وDeepSeek).',
    },
    links: {
      repo: 'https://github.com/dieaikhlayel/Palestinian-Cultural-Heritage',
      live: 'https://dieaikhlayel.github.io/Palestinian-Cultural-Heritage/',
    },
  },
  {
    id: 'storefront-backend',
    featured: false,
    name: { en: 'StoreFront Backend' },
    summary: {
      en: 'A REST API for an online store, built for the Udacity Full Stack JavaScript Nanodegree: products, users, orders and order items, with JWT authentication, bcrypt password hashing, PostgreSQL migrations and tests.',
      ar: 'واجهة برمجية (REST API) لمتجر إلكتروني، بُنيت ضمن برنامج Udacity Full Stack JavaScript Nanodegree: المنتجات والمستخدمون والطلبات وعناصر الطلب، مع مصادقة JWT وتشفير كلمات المرور بـ bcrypt وترحيلات PostgreSQL واختبارات.',
    },
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker'],
    note: {
      en: 'Known limitations: some database queries put the id directly into the SQL text instead of using parameters, and the read routes for users and orders do not require a token yet.',
      ar: 'قيود معروفة: بعض استعلامات قاعدة البيانات تُدخل المعرّف مباشرة في نص SQL بدل استخدام معاملات، ومسارات قراءة المستخدمين والطلبات لا تتطلب رمز مصادقة بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/StoreFront-Backend' },
  },
  {
    id: 'devcollab',
    featured: false,
    name: { en: 'DevCollab' },
    summary: {
      en: 'A project-management app: a Spring Boot API for authentication, users, projects and tasks, an Angular frontend with a kanban board, and a React admin dashboard.',
      ar: 'تطبيق لإدارة المشاريع: واجهة برمجية بـ Spring Boot للمصادقة والمستخدمين والمشاريع والمهام، وواجهة أمامية بـ Angular مع لوحة كانبان، ولوحة إدارة بـ React.',
    },
    tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'React'],
    note: {
      en: 'Work in progress: sprints, teams, comments, notifications and analytics have data models or screens, but their backend endpoints are not written yet.',
      ar: 'قيد التطوير: للسبرنتات والفرق والتعليقات والإشعارات والتحليلات نماذج بيانات أو شاشات، لكن نقاط النهاية الخلفية الخاصة بها لم تُكتب بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/DevCollab' },
  },
  {
    id: 'service-desk-tracker',
    featured: false,
    name: { en: 'IT Service Desk Tracker' },
    badge: { en: 'Learning project', ar: 'مشروع تعلّم' },
    summary: {
      en: 'A ticket tracker for an IT service desk: create, filter and search tickets, and see counts by status.',
      ar: 'متتبّع تذاكر لمكتب دعم تقني: إنشاء التذاكر وتصفيتها والبحث فيها وعرض أعدادها حسب الحالة.',
    },
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript'],
    links: { repo: 'https://github.com/dieaikhlayel/service-desk-tracker' },
  },
  {
    id: 'snake-challenge',
    featured: false,
    name: { en: 'Snake Challenge' },
    summary: {
      en: 'A Snake game with adjustable difficulty, themes and a saved high score. Frontend only, with no backend or database.',
      ar: 'لعبة الثعبان بمستويات صعوبة وسمات قابلة للتغيير وأعلى نتيجة محفوظة. واجهة أمامية فقط، بلا خلفية أو قاعدة بيانات.',
    },
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Vite'],
    links: { repo: 'https://github.com/dieaikhlayel/snake-challenge' },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const OTHER_PROJECTS = PROJECTS.filter((project) => !project.featured);
