import { TestBed } from '@angular/core/testing';
import { THEME_STORAGE_KEY } from './theme.model';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  const root = document.documentElement;

  beforeEach(() => {
    localStorage.clear();
    root.removeAttribute('data-theme');
    TestBed.resetTestingModule();
  });

  afterEach(() => {
    localStorage.clear();
    root.removeAttribute('data-theme');
  });

  it('follows the system by default (no data-theme attribute)', () => {
    const service = TestBed.inject(ThemeService);
    TestBed.tick();
    expect(service.choice()).toBe('system');
    expect(root.hasAttribute('data-theme')).toBe(false);
  });

  it('applies and stores the selected theme', () => {
    const service = TestBed.inject(ThemeService);
    service.select('midnight');
    TestBed.tick();
    expect(root.getAttribute('data-theme')).toBe('midnight');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('midnight');
  });

  it('removes the attribute again when switching back to system', () => {
    const service = TestBed.inject(ThemeService);
    service.select('forest');
    TestBed.tick();
    service.select('system');
    TestBed.tick();
    expect(root.hasAttribute('data-theme')).toBe(false);
  });

  it('restores a valid stored theme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'rose');
    const service = TestBed.inject(ThemeService);
    TestBed.tick();
    expect(service.choice()).toBe('rose');
    expect(root.getAttribute('data-theme')).toBe('rose');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'not-a-theme');
    const service = TestBed.inject(ThemeService);
    TestBed.tick();
    expect(service.choice()).toBe('system');
    expect(root.hasAttribute('data-theme')).toBe(false);
  });
});
