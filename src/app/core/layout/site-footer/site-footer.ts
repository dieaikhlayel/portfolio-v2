import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';
import { SITE_LINKS } from '../../site.config';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly i18n = inject(I18nService);
  protected readonly links = SITE_LINKS;
}
