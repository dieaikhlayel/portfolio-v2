import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { PageKey } from '../core/page-key';
import { DEFAULT_LANG, LANG_DIRECTION, Lang } from './lang';
import { ar } from './translations/ar';
import { en, Translations } from './translations/en';

const DICTIONARIES: Record<Lang, Translations> = { en, ar };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(DEFAULT_LANG);
  readonly page = signal<PageKey | null>(null);
  readonly dir = computed(() => LANG_DIRECTION[this.lang()]);
  readonly t = computed(() => DICTIONARIES[this.lang()]);

  /** The browser tab title: "About | Diea Ikhlayel" on inner pages, the site title on the home page. */
  readonly title = computed(() => {
    const t = this.t();
    const page = this.page();
    if (!page) return t.meta.title;
    const name = page === 'notFound' ? t.notFound.title : t.nav[page];
    return `${name} | ${t.site.name}`;
  });

  constructor() {
    effect(() => {
      const root = this.document.documentElement;
      root.setAttribute('lang', this.lang());
      root.setAttribute('dir', this.dir());
      this.document.title = this.title();
      this.setMetaDescription(this.t().meta.description);
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  setPage(page: PageKey | null): void {
    this.page.set(page);
  }

  private setMetaDescription(content: string): void {
    let tag = this.document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = this.document.createElement('meta');
      tag.setAttribute('name', 'description');
      this.document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }
}
