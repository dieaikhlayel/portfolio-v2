import { Routes } from '@angular/router';
import { LangShell } from './core/layout/lang-shell';
import { HomePage } from './features/home/home-page';
import { PlaceholderPage } from './features/placeholder/placeholder-page';
import { DEFAULT_LANG, LANGS } from './i18n/lang';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  ...LANGS.map((lang) => ({
    path: lang,
    component: LangShell,
    data: { lang },
    children: [
      { path: '', component: HomePage },
      { path: 'projects', component: PlaceholderPage, data: { page: 'projects' } },
      { path: 'about', component: PlaceholderPage, data: { page: 'about' } },
      { path: 'contact', component: PlaceholderPage, data: { page: 'contact' } },
    ],
  })),
  { path: '**', redirectTo: DEFAULT_LANG },
];
