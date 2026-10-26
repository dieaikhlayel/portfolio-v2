import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { I18nService } from '../../i18n/i18n.service';
import { DEFAULT_LANG, isLang } from '../../i18n/lang';
import { PageKey, isPageKey } from '../page-key';

/** The page name set in the `data` of the deepest active route, if any. */
function currentPage(snapshot: ActivatedRouteSnapshot): PageKey | null {
  let page: unknown = null;
  for (let node: ActivatedRouteSnapshot | null = snapshot; node; node = node.firstChild) {
    if (node.data['page'] !== undefined) page = node.data['page'];
  }
  return isPageKey(page) ? page : null;
}

/**
 * Wraps every page under /en or /ar. Tells the I18nService which language is active and which
 * page is showing, so the browser title follows the page.
 */
@Component({
  selector: 'app-lang-shell',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class LangShell {
  constructor() {
    const route = inject(ActivatedRoute);
    const i18n = inject(I18nService);

    const lang = route.snapshot.data['lang'];
    i18n.setLang(isLang(lang) ? lang : DEFAULT_LANG);

    const updatePage = () => i18n.setPage(currentPage(route.snapshot));
    updatePage();
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(updatePage);
  }
}
