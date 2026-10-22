import { TestBed } from '@angular/core/testing';
import { THEME_OPTIONS } from '../../../core/theme/theme.model';
import { ThemeSwitcher } from './theme-switcher';

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('offers every theme plus "system", inside a labelled control', async () => {
    const fixture = TestBed.createComponent(ThemeSwitcher);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('label select')).not.toBeNull();
    expect(el.querySelectorAll('option').length).toBe(THEME_OPTIONS.length);
    expect(THEME_OPTIONS.length).toBe(11);
  });

  it('applies the chosen theme to the page', async () => {
    const fixture = TestBed.createComponent(ThemeSwitcher);
    await fixture.whenStable();
    const select = (fixture.nativeElement as HTMLElement).querySelector('select')!;
    select.value = 'ocean';
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(document.documentElement.getAttribute('data-theme')).toBe('ocean');
  });
});
