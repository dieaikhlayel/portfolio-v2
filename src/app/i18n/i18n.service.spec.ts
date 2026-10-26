import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { ar } from './translations/ar';
import { en } from './translations/en';

describe('I18nService', () => {
  const root = document.documentElement;

  beforeEach(() => TestBed.resetTestingModule());

  it('starts in English, left-to-right', () => {
    const service = TestBed.inject(I18nService);
    TestBed.tick();
    expect(service.lang()).toBe('en');
    expect(root.getAttribute('lang')).toBe('en');
    expect(root.getAttribute('dir')).toBe('ltr');
  });

  it('switches the document to Arabic, right-to-left, with an Arabic title', () => {
    const service = TestBed.inject(I18nService);
    service.setLang('ar');
    TestBed.tick();
    expect(root.getAttribute('lang')).toBe('ar');
    expect(root.getAttribute('dir')).toBe('rtl');
    expect(document.title).toBe(service.t().meta.title);
    expect(document.title).toBe(ar.meta.title);
  });

  it('keeps the meta description in step with the language', () => {
    const service = TestBed.inject(I18nService);
    service.setLang('ar');
    TestBed.tick();
    const tag = document.head.querySelector('meta[name="description"]');
    expect(tag?.getAttribute('content')).toBe(service.t().meta.description);
    service.setLang('en');
    TestBed.tick();
    expect(tag?.getAttribute('content')).toBe(service.t().meta.description);
  });

  it('puts the page name before the site name in the title', () => {
    const service = TestBed.inject(I18nService);
    service.setPage('about');
    TestBed.tick();
    expect(document.title).toBe(`${en.nav.about} | ${en.site.name}`);
    service.setLang('ar');
    service.setPage('contact');
    TestBed.tick();
    expect(document.title).toBe(`${ar.nav.contact} | ${ar.site.name}`);
  });

  it('goes back to the site title when there is no page name', () => {
    const service = TestBed.inject(I18nService);
    service.setPage('projects');
    TestBed.tick();
    service.setPage(null);
    TestBed.tick();
    expect(document.title).toBe(en.meta.title);
  });
});
