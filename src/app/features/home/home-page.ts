import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-home-page',
  template: `
    <h1>{{ i18n.t().site.name }}</h1>
    <p>{{ i18n.t().site.underConstruction }}</p>
  `,
})
export class HomePage {
  protected readonly i18n = inject(I18nService);
}
