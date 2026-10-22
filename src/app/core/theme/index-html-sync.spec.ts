import { readFileSync } from 'node:fs';
import { THEME_IDS, THEME_STORAGE_KEY } from './theme.model';

describe('index.html theme bootstrap script', () => {
  const html = readFileSync('src/index.html', 'utf-8');

  it('uses the same storage key as the ThemeService', () => {
    expect(html).toContain(`localStorage.getItem('${THEME_STORAGE_KEY}')`);
  });

  it('lists exactly the themes the app defines', () => {
    const match = html.match(/var ids = \[([^\]]*)\]/);
    expect(match).not.toBeNull();
    const ids = [...match![1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
    expect(ids).toEqual([...THEME_IDS]);
  });
});
