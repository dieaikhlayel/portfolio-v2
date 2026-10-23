export const THEME_IDS = [
  'light',
  'dark',
  'midnight',
  'forest',
  'ember',
  'violet',
  'contrast',
  'sand',
  'ocean',
  'rose',
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

/** "system" means: follow the visitor's OS setting (no data-theme attribute). */
export type ThemeChoice = ThemeId | 'system';

export const THEME_STORAGE_KEY = 'portfolio-theme';

/** Every choice offered to visitors, in menu order. Labels live in the i18n dictionaries. */
export const THEME_CHOICES: readonly ThemeChoice[] = ['system', ...THEME_IDS];

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return value === 'system' || (THEME_IDS as readonly unknown[]).includes(value);
}
