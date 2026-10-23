import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../../app';
import { routes } from '../../../app.routes';

// Rendered inside the real App so the language shell activates exactly as it does in production.
describe('LanguageSwitcher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
      'app-language-switcher a',
    )!;
  }

  it('on an English page, links to the Arabic version, labelled in Arabic', async () => {
    const link = await render('/en');
    expect(link.getAttribute('href')).toBe('/ar');
    expect(link.getAttribute('lang')).toBe('ar');
    expect(link.getAttribute('hreflang')).toBe('ar');
    expect(link.textContent?.trim()).toBe('العربية');
  });

  it('on an Arabic page, links back to English', async () => {
    const link = await render('/ar');
    expect(link.getAttribute('href')).toBe('/en');
    expect(link.getAttribute('hreflang')).toBe('en');
    expect(link.textContent?.trim()).toBe('English');
  });

  it('has an accessible name that includes the target language', async () => {
    const link = await render('/en');
    expect(link.getAttribute('aria-label')).toContain('العربية');
  });
});
