import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { Localized, resolveLocalized } from '../../i18n/localized';
import { CERTIFICATES, EDUCATION, EXPERIENCE, LANGUAGES } from './about.data';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  protected readonly i18n = inject(I18nService);

  protected readonly sections = [
    { id: 'education', entries: EDUCATION },
    { id: 'experience', entries: EXPERIENCE },
    { id: 'certificates', entries: CERTIFICATES },
  ] as const;

  protected readonly languages = LANGUAGES;

  protected view(value: Localized) {
    return resolveLocalized(value, this.i18n.lang());
  }
}
