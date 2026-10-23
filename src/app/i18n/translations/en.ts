import { ThemeChoice } from '../../core/theme/theme.model';

export const en = {
  meta: {
    title: 'Diea Ikhlayel | Portfolio',
    description: 'Portfolio of Diea Ikhlayel, a full-stack web developer.',
  },
  a11y: {
    skipToContent: 'Skip to main content',
  },
  site: {
    name: 'Diea Ikhlayel',
  },
  home: {
    hero: {
      role: 'Frontend / full-stack developer',
      intro:
        'I build web applications, from Angular interfaces to the APIs and databases behind them. Browse my projects or get in touch.',
      viewProjects: 'View projects',
      contactMe: 'Contact me',
    },
  },
  theme: {
    label: 'Theme',
    options: {
      system: 'System',
      light: 'Paper (light)',
      dark: 'Charcoal (dark)',
      midnight: 'Midnight',
      forest: 'Forest',
      ember: 'Ember',
      violet: 'Violet',
      contrast: 'High contrast',
      sand: 'Sand',
      ocean: 'Ocean',
      rose: 'Rose',
    } satisfies Record<ThemeChoice, string>,
  },
  language: {
    switchTo: 'Switch language',
  },
  nav: {
    primary: 'Primary',
    menu: 'Menu',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  pages: {
    comingSoon: 'This page is coming soon.',
  },
  footer: {
    email: 'Email',
    note: 'Built with Angular.',
  },
};

export type Translations = typeof en;
