import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../../app';
import { routes } from '../../../app.routes';
import { ar } from '../../../i18n/translations/ar';
import { en } from '../../../i18n/translations/en';

describe('SiteHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  const hrefs = (el: HTMLElement) =>
    [...el.querySelectorAll<HTMLAnchorElement>('nav a')].map((a) => a.getAttribute('href'));

  it('shows the Arabic site name as a link to the Arabic home page', async () => {
    const el = await render('/ar');
    const brand = el.querySelector('a.brand');
    expect(brand?.getAttribute('href')).toBe('/ar');
    expect(brand?.textContent?.trim()).toBe(ar.site.name);
  });

  it('shows the English site name as a link to the English home page', async () => {
    const el = await render('/en');
    const brand = el.querySelector('a.brand');
    expect(brand?.getAttribute('href')).toBe('/en');
    expect(brand?.textContent?.trim()).toBe(en.site.name);
  });

  it('lists Projects, About and Contact in the current language', async () => {
    const el = await render('/en');
    expect(hrefs(el)).toEqual(['/en/projects', '/en/about', '/en/contact']);
    expect([...el.querySelectorAll('nav a')].map((a) => a.textContent?.trim())).toEqual([
      'Projects',
      'About',
      'Contact',
    ]);
  });

  it('uses Arabic labels and /ar links on the Arabic site', async () => {
    const el = await render('/ar');
    expect(hrefs(el)).toEqual(['/ar/projects', '/ar/about', '/ar/contact']);
    expect(el.querySelector('nav')?.getAttribute('aria-label')).toBe('التنقل الرئيسي');
    expect(el.querySelector('nav a')?.textContent?.trim()).toBe('المشاريع');
  });

  it('marks only the current page with aria-current', async () => {
    const el = await render('/en/about');
    const current = [...el.querySelectorAll('nav a[aria-current="page"]')];
    expect(current.length).toBe(1);
    expect(current[0].getAttribute('href')).toBe('/en/about');
  });

  it('opens and closes the mobile menu with correct aria-expanded', async () => {
    const el = await render('/en');
    const button = el.querySelector<HTMLButtonElement>('button.menu-toggle')!;
    const menu = el.querySelector('#site-menu')!;
    expect(button.getAttribute('aria-controls')).toBe('site-menu');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.classList.contains('is-open')).toBe(false);

    button.click();
    TestBed.tick();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(menu.classList.contains('is-open')).toBe(true);

    button.click();
    TestBed.tick();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu with Escape and returns focus to the toggle button', async () => {
    const el = await render('/en');
    const button = el.querySelector<HTMLButtonElement>('button.menu-toggle')!;
    button.click();
    TestBed.tick();
    const firstLink = el.querySelector<HTMLAnchorElement>('nav a')!;
    firstLink.focus();
    firstLink.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    TestBed.tick();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(button);
  });

  it('closes the menu when the visitor navigates to another page', async () => {
    const el = await render('/en');
    const button = el.querySelector<HTMLButtonElement>('button.menu-toggle')!;
    button.click();
    TestBed.tick();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    await TestBed.inject(Router).navigateByUrl('/en/contact');
    TestBed.tick();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
