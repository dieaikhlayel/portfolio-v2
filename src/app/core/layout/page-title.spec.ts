import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { ar } from '../../i18n/translations/ar';
import { en } from '../../i18n/translations/en';

describe('Browser tab titles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function titleAt(...urls: string[]) {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    for (const url of urls) {
      await router.navigateByUrl(url);
      await fixture.whenStable();
      TestBed.tick();
    }
    return document.title;
  }

  it('uses the site title on the home page', async () => {
    expect(await titleAt('/en')).toBe(en.meta.title);
    expect(await titleAt('/ar')).toBe(ar.meta.title);
  });

  it('puts the page name first on inner pages, in the page language', async () => {
    expect(await titleAt('/en/about')).toBe(`${en.nav.about} | ${en.site.name}`);
    expect(await titleAt('/en/contact')).toBe(`${en.nav.contact} | ${en.site.name}`);
    expect(await titleAt('/ar/projects')).toBe(`${ar.nav.projects} | ${ar.site.name}`);
  });

  it('follows the visitor from page to page', async () => {
    expect(await titleAt('/en/about', '/en/contact')).toBe(`${en.nav.contact} | ${en.site.name}`);
    expect(await titleAt('/en/contact', '/en')).toBe(en.meta.title);
  });

  it('has its own title on the 404 page, in both languages', async () => {
    expect(await titleAt('/en/nope')).toBe(`${en.notFound.title} | ${en.site.name}`);
    expect(await titleAt('/ar/nope')).toBe(`${ar.notFound.title} | ${ar.site.name}`);
    expect(await titleAt('/nope')).toBe(`${en.notFound.title} | ${en.site.name}`);
  });
});
