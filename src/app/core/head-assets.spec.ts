import { existsSync, readFileSync } from 'node:fs';

describe('index.html icon links', () => {
  const html = readFileSync('src/index.html', 'utf-8');
  const hrefs = [
    ...html.matchAll(/<link[^>]*rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g),
  ].map((match) => match[1]);

  it('declares an SVG icon, an ICO fallback and an Apple touch icon', () => {
    expect(hrefs.some((href) => href.endsWith('.svg'))).toBe(true);
    expect(hrefs.some((href) => href.endsWith('.ico'))).toBe(true);
    expect(hrefs.some((href) => href.endsWith('.png'))).toBe(true);
  });

  it('points only at files that exist in the public folder', () => {
    for (const href of hrefs) {
      expect(existsSync(`public/${href}`), href).toBe(true);
    }
  });

  it('does not leave the default Angular icon behind', () => {
    expect(existsSync('public/favicon.ico')).toBe(false);
  });
});
