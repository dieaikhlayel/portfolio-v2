import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { PHONE_DISPLAY, SITE_LINKS } from '../../core/site.config';
import { ar } from '../../i18n/translations/ar';
import { en } from '../../i18n/translations/en';

describe('ContactPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('article.contact')!;
  }

  it('has one h1 and the English intro', async () => {
    const el = await render('/en/contact');
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(en.nav.contact);
    expect(el.querySelector('.contact__intro')?.textContent?.trim()).toBe(en.contact.intro);
  });

  it('has the Arabic heading, intro, email label and phone label', async () => {
    const el = await render('/ar/contact');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(ar.nav.contact);
    expect(el.querySelector('.contact__intro')?.textContent?.trim()).toBe(ar.contact.intro);
    const labels = [...el.querySelectorAll('dt')].map((dt) => dt.textContent?.trim());
    expect(labels.slice(0, 2)).toEqual([ar.contact.email, ar.contact.phone]);
  });

  it('links to email, phone, LinkedIn and GitHub', async () => {
    const el = await render('/en/contact');
    const hrefs = [...el.querySelectorAll('dd a')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([
      `mailto:${SITE_LINKS.email}`,
      `tel:${SITE_LINKS.phone}`,
      SITE_LINKS.linkedin,
      SITE_LINKS.github,
    ]);
  });

  it('shows each address as text so it can be read and copied', async () => {
    const el = await render('/en/contact');
    const texts = [...el.querySelectorAll('dd a')].map((a) => a.textContent?.trim());
    expect(texts).toEqual([
      SITE_LINKS.email,
      PHONE_DISPLAY,
      'linkedin.com/in/diea-ikhlayel',
      'github.com/dieaikhlayel',
    ]);
  });

  it('keeps addresses and the phone number left-to-right on the Arabic page', async () => {
    const el = await render('/ar/contact');
    for (const link of el.querySelectorAll('dd a')) {
      expect(link.getAttribute('dir')).toBe('ltr');
      expect(link.getAttribute('lang')).toBe('en');
    }
  });
});
