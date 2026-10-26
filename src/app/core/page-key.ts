/** Pages that get their own browser title, e.g. "About | Diea Ikhlayel". The home page has none. */
export type PageKey = 'projects' | 'about' | 'contact' | 'notFound';

const PAGE_KEYS: readonly PageKey[] = ['projects', 'about', 'contact', 'notFound'];

export function isPageKey(value: unknown): value is PageKey {
  return (PAGE_KEYS as readonly unknown[]).includes(value);
}
