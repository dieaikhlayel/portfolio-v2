import { Component, inject } from '@angular/core';
import { PHONE_DISPLAY, SITE_LINKS, displayUrl } from '../../core/site.config';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  protected readonly i18n = inject(I18nService);
  protected readonly links = SITE_LINKS;
  protected readonly phoneText = PHONE_DISPLAY;
  protected readonly linkedinText = displayUrl(SITE_LINKS.linkedin);
  protected readonly githubText = displayUrl(SITE_LINKS.github);
}
