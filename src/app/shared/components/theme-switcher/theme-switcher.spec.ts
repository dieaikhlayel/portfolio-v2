import { TestBed } from '@angular/core/testing';
import { THEME_CHOICES } from '../../../core/theme/theme.model';
import { I18nService } from '../../../i18n/i18n.service';
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
    expect(el.querySelectorAll('option').length).toBe(THEME_CHOICES.length);
    expect(THEME_CHOICES.length).toBe(11);
  });

  it('shows English labels by default and Arabic labels on the Arabic site', async () => {
    const fixture = TestBed.createComponent(ThemeSwitcher);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.theme-switcher__label')?.textContent?.trim()).toBe('Theme');
    TestBed.inject(I18nService).setLang('ar');
    await fixture.whenStable();
    expect(el.querySelector('.theme-switcher__label')?.textContent?.trim()).toBe('المظهر');
    expect(el.querySelector('option')?.textContent?.trim()).toBe('النظام');
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
