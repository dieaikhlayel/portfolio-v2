import { ar } from './ar';
import { en } from './en';

function flatten(value: unknown, prefix = ''): Record<string, string> {
  if (typeof value === 'string') return { [prefix]: value };
  return Object.entries(value as Record<string, unknown>).reduce(
    (acc, [key, child]) => ({ ...acc, ...flatten(child, prefix ? `${prefix}.${key}` : key) }),
    {} as Record<string, string>,
  );
}

describe('translations', () => {
  const enFlat = flatten(en);
  const arFlat = flatten(ar);

  it('has exactly the same keys in English and Arabic', () => {
    expect(Object.keys(arFlat).sort()).toEqual(Object.keys(enFlat).sort());
  });

  it('has no empty strings', () => {
    for (const [key, value] of [...Object.entries(enFlat), ...Object.entries(arFlat)]) {
      expect(value.trim(), key).not.toBe('');
    }
  });

  it('does not leave Arabic values identical to English ones (except proper names)', () => {
    const allowed = new Set(['site.name']);
    for (const key of Object.keys(enFlat)) {
      if (allowed.has(key)) continue;
      expect(arFlat[key], key).not.toBe(enFlat[key]);
    }
  });
});
