import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DEFAULT_LANG, isLang } from '../../i18n/lang';
import { I18nService } from '../../i18n/i18n.service';

/** Wraps every page under /en or /ar and tells the I18nService which language is active. */
@Component({
  selector: 'app-lang-shell',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class LangShell {
  constructor() {
    const lang = inject(ActivatedRoute).snapshot.data['lang'];
    inject(I18nService).setLang(isLang(lang) ? lang : DEFAULT_LANG);
  }
}
