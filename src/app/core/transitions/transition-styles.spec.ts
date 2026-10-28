import { readFileSync } from 'node:fs';

describe('transition styles', () => {
  const css = readFileSync('src/styles/_transitions.scss', 'utf-8');

  it('animates the page content but names the header and footer separately so they stay put', () => {
    expect(css).toMatch(/\.site-header\s*\{[^}]*view-transition-name:\s*site-header/);
    expect(css).toMatch(/\.site-footer\s*\{[^}]*view-transition-name:\s*site-footer/);
    expect(css).toMatch(/main#main\s*\{[^}]*view-transition-name:\s*page/);
  });

  it('has styles for every kind of transition', () => {
    for (const kind of ['rise', 'forward', 'backward', 'language']) {
      expect(css, kind).toMatch(new RegExp(`data-transition=['"]${kind}['"]`));
    }
  });

  it('mirrors the slide on right-to-left pages', () => {
    expect(css).toMatch(/:root\[dir=['"]rtl['"]\]\s*\{[^}]*--slide-dir:\s*-1/);
  });

  it('turns the animation off for visitors who ask for reduced motion', () => {
    expect(css).toContain('prefers-reduced-motion: reduce');
  });
});
