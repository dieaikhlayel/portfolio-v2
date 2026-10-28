import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ViewTransitionInfo, withViewTransitions } from '@angular/router';
import { Lang, isLang } from '../../i18n/lang';
import { PageKey, isPageKey } from '../page-key';

/**
 * rise     : ordinary navigation, the new page fades in while rising a little
 * forward  : moving along Home, Projects, About, Contact, the page slides in the direction of travel
 * backward : the same, going the other way
 * language : switching between English and Arabic, a plain cross-fade
 */
export type TransitionKind = 'rise' | 'forward' | 'backward' | 'language';

export interface RouteInfo {
  readonly lang: Lang | null;
  readonly page: PageKey | null;
}

/** Order of the main pages (null is the home page). A later page slides forward, an earlier one back. */
const PAGE_ORDER: readonly (PageKey | null)[] = [null, 'projects', 'about', 'contact'];

export function transitionKind(from: RouteInfo, to: RouteInfo): TransitionKind {
  if (from.lang && to.lang && from.lang !== to.lang) return 'language';
  const start = PAGE_ORDER.indexOf(from.page);
  const end = PAGE_ORDER.indexOf(to.page);
  if (start === -1 || end === -1 || start === end) return 'rise';
  return end > start ? 'forward' : 'backward';
}

/** Reads the language and page name from the `data` of the routes in a router snapshot. */
export function describeRoute(snapshot: ActivatedRouteSnapshot): RouteInfo {
  let lang: Lang | null = null;
  let page: PageKey | null = null;
  for (let node: ActivatedRouteSnapshot | null = snapshot; node; node = node.firstChild) {
    if (isLang(node.data['lang'])) lang = node.data['lang'];
    if (isPageKey(node.data['page'])) page = node.data['page'];
  }
  return { lang, page };
}

/** Called by the router each time a page change starts a view transition. */
export function onViewTransitionCreated({ transition, from, to }: ViewTransitionInfo): void {
  const document = inject(DOCUMENT);

  // Visitors who ask for less motion get an instant page change.
  if (document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    transition.skipTransition();
    return;
  }

  const root = document.documentElement;
  root.setAttribute('data-transition', transitionKind(describeRoute(from), describeRoute(to)));
  const clear = () => root.removeAttribute('data-transition');
  transition.finished.then(clear, clear);
}

/** Added to provideRouter(...) in app.config.ts. The first page load is not animated. */
export const pageTransitions = withViewTransitions({
  skipInitialTransition: true,
  onViewTransitionCreated,
});
