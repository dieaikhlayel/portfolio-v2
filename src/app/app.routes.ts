import { Routes } from '@angular/router';
import { LangShell } from './core/layout/lang-shell';
import { HomePage } from './features/home/home-page';
import { DEFAULT_LANG, LANGS } from './i18n/lang';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  ...LANGS.map((lang) => ({
    path: lang,
    component: LangShell,
    data: { lang },
    children: [{ path: '', component: HomePage }],
  })),
  { path: '**', redirectTo: DEFAULT_LANG },
];
