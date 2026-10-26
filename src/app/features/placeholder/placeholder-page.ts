import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

type PlaceholderKey = 'projects';

/** Temporary page for sections that are not built yet. Each one is replaced by its real page. */
@Component({
  selector: 'app-placeholder-page',
  template: `
    <h1>{{ i18n.t().nav[key] }}</h1>
    <p>{{ i18n.t().pages.comingSoon }}</p>
  `,
})
export class PlaceholderPage {
  protected readonly i18n = inject(I18nService);
  protected readonly key = inject(ActivatedRoute).snapshot.data['page'] as PlaceholderKey;
}
