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

export interface ThemeOption {
  id: ThemeChoice;
  label: string;
}

// Labels are English for now; they move into the translation dictionaries with the i18n work.
export const THEME_OPTIONS: readonly ThemeOption[] = [
  { id: 'system', label: 'System' },
  { id: 'light', label: 'Paper (light)' },
  { id: 'dark', label: 'Charcoal (dark)' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'forest', label: 'Forest' },
  { id: 'ember', label: 'Ember' },
  { id: 'violet', label: 'Violet' },
  { id: 'contrast', label: 'High contrast' },
  { id: 'sand', label: 'Sand' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'rose', label: 'Rose' },
];

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return value === 'system' || (THEME_IDS as readonly unknown[]).includes(value);
}
