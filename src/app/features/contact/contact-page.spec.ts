import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { SITE_LINKS } from '../../core/site.config';
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

  it('has the Arabic heading, intro and email label', async () => {
    const el = await render('/ar/contact');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(ar.nav.contact);
    expect(el.querySelector('.contact__intro')?.textContent?.trim()).toBe(ar.contact.intro);
    expect(el.querySelector('dt')?.textContent?.trim()).toBe(ar.contact.email);
  });

  it('links to email, LinkedIn and GitHub', async () => {
    const el = await render('/en/contact');
    const hrefs = [...el.querySelectorAll('dd a')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([`mailto:${SITE_LINKS.email}`, SITE_LINKS.linkedin, SITE_LINKS.github]);
  });

  it('shows the address as text so it can be read and copied', async () => {
    const el = await render('/en/contact');
    const texts = [...el.querySelectorAll('dd a')].map((a) => a.textContent?.trim());
    expect(texts).toEqual([
      SITE_LINKS.email,
      'linkedin.com/in/diea-ikhlayel',
      'github.com/dieaikhlayel',
    ]);
  });

  it('keeps addresses left-to-right English on the Arabic page', async () => {
    const el = await render('/ar/contact');
    for (const link of el.querySelectorAll('dd a')) {
      expect(link.getAttribute('dir')).toBe('ltr');
      expect(link.getAttribute('lang')).toBe('en');
    }
  });

  it('does not publish a phone number', async () => {
    const el = await render('/en/contact');
    expect(el.innerHTML).not.toContain('tel:');
    expect(el.textContent).not.toMatch(/\+?\d[\d\s-]{7,}/);
  });
});
