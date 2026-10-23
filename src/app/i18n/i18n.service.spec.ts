import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

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
    expect(document.title).toContain('الملف الشخصي');
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
});
