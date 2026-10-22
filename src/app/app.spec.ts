import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a main landmark with the site heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main#main h1')?.textContent).toContain('Diea Ikhlayel');
  });

  it('should include the theme switcher in the header', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('header app-theme-switcher select')).not.toBeNull();
  });

  it('should provide a skip link to the main content', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector('a.skip-link');
    expect(link?.getAttribute('href')).toBe('#main');
  });
});
