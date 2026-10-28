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
 * Describe only what the repository really shows. Order here is the order on the page.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'devcollab',
    featured: true,
    name: { en: 'DevCollab' },
    summary: {
      en: 'A full-stack application with an Angular frontend, a Spring Boot backend and a React admin dashboard.',
      ar: 'تطبيق متكامل بواجهة أمامية بـ Angular وخلفية بـ Spring Boot ولوحة إدارة بـ React.',
    },
    tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'React'],
    note: {
      en: 'The Angular frontend has no automated tests yet.',
      ar: 'الواجهة الأمامية المبنية بـ Angular لا تحتوي على اختبارات آلية بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/DevCollab' },
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
    links: {
      repo: 'https://github.com/dieaikhlayel/Palestinian-Cultural-Heritage',
      live: 'https://dieaikhlayel.github.io/Palestinian-Cultural-Heritage/',
    },
  },
  {
    id: 'finsight-ai',
    featured: true,
    name: { en: 'FinSight AI' },
    summary: {
      en: 'The backend of FinSight AI: a FastAPI service with authentication, database migrations (SQLAlchemy and Alembic) and an OpenAI-powered AI service, with automated tests.',
      ar: 'الجزء الخلفي من FinSight AI: خدمة FastAPI مع مصادقة المستخدمين وترحيل قواعد البيانات (SQLAlchemy وAlembic) وخدمة ذكاء اصطناعي مبنية على OpenAI، مع اختبارات آلية.',
    },
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'OpenAI API'],
    note: {
      en: 'This repository contains the backend only.',
      ar: 'يحتوي هذا المستودع على الجزء الخلفي فقط.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/FinSight-AI' },
  },
  {
    id: 'storefront-backend',
    featured: true,
    name: { en: 'StoreFront Backend' },
    summary: {
      en: 'A REST API for an online store with products, users, orders and order items. It uses JWT authentication, bcrypt password hashing and PostgreSQL migrations, with tests included.',
      ar: 'واجهة برمجية (REST API) لمتجر إلكتروني تشمل المنتجات والمستخدمين والطلبات وعناصر الطلب، مع مصادقة JWT وتشفير كلمات المرور بـ bcrypt وترحيلات PostgreSQL واختبارات مضمّنة.',
    },
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker'],
    note: {
      en: 'Known limitations: some database queries put the id directly into the SQL text instead of using parameters, and the read routes for users and orders do not require a token yet.',
      ar: 'قيود معروفة: بعض استعلامات قاعدة البيانات تُدخل المعرّف مباشرة في نص SQL بدل استخدام معاملات، ومسارات قراءة المستخدمين والطلبات لا تتطلب رمز مصادقة بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/StoreFront-Backend' },
  },
  {
    id: 'my-store',
    featured: false,
    name: { en: 'My Store' },
    summary: {
      en: 'An Angular online-store front end with a product list, product pages, a shopping cart and an order confirmation page.',
      ar: 'واجهة أمامية بـ Angular لمتجر إلكتروني: قائمة المنتجات وصفحات التفاصيل وسلة التسوق وصفحة تأكيد الطلب.',
    },
    tech: ['Angular', 'TypeScript'],
    links: { repo: 'https://github.com/dieaikhlayel/My-Store' },
  },
  {
    id: 'image-processing-api',
    featured: false,
    name: { en: 'Image Processing API' },
    summary: {
      en: 'An API that resizes images on request and saves the results so they are not processed twice.',
      ar: 'واجهة برمجية تغيّر حجم الصور عند الطلب وتحفظ النتائج حتى لا تُعالَج مرتين.',
    },
    tech: ['Node.js', 'Express', 'TypeScript', 'Sharp'],
    note: {
      en: 'Known limitation: the file name and the image size are not validated yet.',
      ar: 'قيد معروف: اسم الملف وحجم الصورة لا يُتحقَّق منهما بعد.',
    },
    links: { repo: 'https://github.com/dieaikhlayel/Image-Processing-API' },
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
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const OTHER_PROJECTS = PROJECTS.filter((project) => !project.featured);
