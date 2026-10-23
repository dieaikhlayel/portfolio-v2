export const LANGS = ['en', 'ar'] as const;

export type Lang = (typeof LANGS)[number];
export type Direction = 'ltr' | 'rtl';

export const DEFAULT_LANG: Lang = 'en';

export const LANG_DIRECTION: Record<Lang, Direction> = {
  en: 'ltr',
  ar: 'rtl',
};

/** Each language is named in its own language, so visitors can always find theirs. */
export const LANG_NAME: Record<Lang, string> = {
  en: 'English',
  ar: 'العربية',
};

export function isLang(value: unknown): value is Lang {
  return (LANGS as readonly unknown[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ar' : 'en';
}
