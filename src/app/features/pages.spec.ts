import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../app';
import { routes } from '../app.routes';
import { en } from '../i18n/translations/en';

describe('Section pages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function heading(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('main h1')?.textContent?.trim();
  }

  it('renders the English headings', async () => {
    expect(await heading('/en/projects')).toBe('Projects');
    expect(await heading('/en/about')).toBe('About');
    expect(await heading('/en/contact')).toBe('Contact');
  });

  it('renders the Arabic headings', async () => {
    expect(await heading('/ar/projects')).toBe('المشاريع');
    expect(await heading('/ar/about')).toBe('نبذة عني');
    expect(await heading('/ar/contact')).toBe('تواصل معي');
  });

  it('shows the 404 page for an unknown address', async () => {
    expect(await heading('/nonsense')).toBe(en.notFound.title);
  });

  it('has exactly one h1 per page', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/en/projects');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('h1').length).toBe(1);
  });
});
