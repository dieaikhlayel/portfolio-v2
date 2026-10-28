import { Routes } from '@angular/router';
import { LangShell } from './core/layout/lang-shell';
import { AboutPage } from './features/about/about-page';
import { ContactPage } from './features/contact/contact-page';
import { HomePage } from './features/home/home-page';
import { NotFoundPage } from './features/not-found/not-found-page';
import { ProjectsPage } from './features/projects/projects-page';
import { DEFAULT_LANG, LANGS } from './i18n/lang';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  ...LANGS.map((lang) => ({
    path: lang,
    component: LangShell,
    data: { lang },
    children: [
      { path: '', component: HomePage },
      { path: 'projects', component: ProjectsPage, data: { page: 'projects' } },
      { path: 'about', component: AboutPage, data: { page: 'about' } },
      { path: 'contact', component: ContactPage, data: { page: 'contact' } },
      { path: '**', component: NotFoundPage, data: { page: 'notFound' } },
    ],
  })),
  // An address with no language at the start: show the English 404 page and keep the address.
  {
    path: '**',
    component: LangShell,
    data: { lang: DEFAULT_LANG },
    children: [{ path: '**', component: NotFoundPage, data: { page: 'notFound' } }],
  },
];
