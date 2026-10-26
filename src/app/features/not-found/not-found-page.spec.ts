import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { ar } from '../../i18n/translations/ar';
import { en } from '../../i18n/translations/en';

describe('NotFoundPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl(url);
    await fixture.whenStable();
    return { el: fixture.nativeElement as HTMLElement, router };
  }

  it('shows the English message and a link home under /en', async () => {
    const { el } = await render('/en/does-not-exist');
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(en.notFound.title);
    expect(el.querySelector('.not-found__message')?.textContent?.trim()).toBe(en.notFound.message);
    const home = el.querySelector('.not-found a.btn');
    expect(home?.getAttribute('href')).toBe('/en');
    expect(home?.textContent?.trim()).toBe(en.notFound.home);
  });

  it('shows the Arabic message, right-to-left, under /ar', async () => {
    const { el } = await render('/ar/does-not-exist');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(ar.notFound.title);
    expect(el.querySelector('.not-found a.btn')?.getAttribute('href')).toBe('/ar');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('shows the English page for an address with no language, and keeps the address', async () => {
    const { el, router } = await render('/does-not-exist');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(en.notFound.title);
    expect(router.url).toBe('/does-not-exist');
  });

  it('asks search engines not to index it, and stops asking once the visitor leaves', async () => {
    const { router } = await render('/en/does-not-exist');
    const robots = () => document.head.querySelector('meta[name="robots"]');
    expect(robots()?.getAttribute('content')).toBe('noindex');
    await router.navigateByUrl('/en');
    TestBed.tick();
    expect(robots()).toBeNull();
  });
});
