import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { ar } from '../../i18n/translations/ar';
import { en } from '../../i18n/translations/en';

describe('HomePage hero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('main')!;
  }

  it('shows the name, role and intro in English', async () => {
    const main = await render('/en');
    expect(main.querySelector('h1')?.textContent?.trim()).toBe(en.site.name);
    expect(main.querySelector('.hero__role')?.textContent?.trim()).toBe(en.home.hero.role);
    expect(main.querySelector('.hero__intro')?.textContent?.trim()).toBe(en.home.hero.intro);
  });

  it('shows the name, role and intro in Arabic', async () => {
    const main = await render('/ar');
    expect(main.querySelector('h1')?.textContent?.trim()).toBe(ar.site.name);
    expect(main.querySelector('.hero__role')?.textContent?.trim()).toBe(ar.home.hero.role);
    expect(main.querySelector('.hero__intro')?.textContent?.trim()).toBe(ar.home.hero.intro);
  });

  it('has a primary button to Projects and a secondary button to Contact', async () => {
    const main = await render('/en');
    const primary = main.querySelector('a.btn--primary');
    const secondary = main.querySelector('a.btn--secondary');
    expect(primary?.getAttribute('href')).toBe('/en/projects');
    expect(primary?.textContent?.trim()).toBe(en.home.hero.viewProjects);
    expect(secondary?.getAttribute('href')).toBe('/en/contact');
    expect(secondary?.textContent?.trim()).toBe(en.home.hero.contactMe);
  });

  it('keeps the buttons inside the Arabic site on the Arabic page', async () => {
    const main = await render('/ar');
    expect(main.querySelector('a.btn--primary')?.getAttribute('href')).toBe('/ar/projects');
    expect(main.querySelector('a.btn--secondary')?.getAttribute('href')).toBe('/ar/contact');
  });

  it('has exactly one h1', async () => {
    const main = await render('/en');
    expect(main.querySelectorAll('h1').length).toBe(1);
  });
});
