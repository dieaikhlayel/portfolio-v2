import { Direction, LANG_DIRECTION, Lang } from './lang';

/**
 * A piece of text that may exist in two languages. Give only `en` for proper names and official
 * titles that stay in English (Udacity, Cisco course names); give `ar` for everything else.
 */
export interface Localized {
  readonly en: string;
  readonly ar?: string;
}

export interface LocalizedView {
  readonly text: string;
  readonly lang: Lang;
  readonly dir: Direction;
}

/** Picks the text for the page language and says which language and direction it is written in. */
export function resolveLocalized(value: Localized, lang: Lang): LocalizedView {
  if (lang === 'ar' && value.ar) {
    return { text: value.ar, lang: 'ar', dir: LANG_DIRECTION.ar };
  }
  return { text: value.en, lang: 'en', dir: LANG_DIRECTION.en };
}
