import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';
import { PageKey } from '../page-key';
import { Lang } from '../../i18n/lang';
import {
  RouteInfo,
  describeRoute,
  onViewTransitionCreated,
  transitionKind,
} from './page-transition';

const at = (lang: Lang | null, page: PageKey | null): RouteInfo => ({ lang, page });

function snapshot(lang: Lang, page: PageKey | null): ActivatedRouteSnapshot {
  const child = { data: page ? { page } : {}, firstChild: null };
  return { data: { lang }, firstChild: child } as unknown as ActivatedRouteSnapshot;
}

describe('transitionKind', () => {
  it('slides forward when moving to a later page', () => {
    expect(transitionKind(at('en', null), at('en', 'projects'))).toBe('forward');
    expect(transitionKind(at('en', 'projects'), at('en', 'about'))).toBe('forward');
    expect(transitionKind(at('ar', null), at('ar', 'contact'))).toBe('forward');
  });

  it('slides back when moving to an earlier page', () => {
    expect(transitionKind(at('en', 'contact'), at('en', 'about'))).toBe('backward');
    expect(transitionKind(at('en', 'about'), at('en', null))).toBe('backward');
  });

  it('cross-fades when the language changes, whatever the page', () => {
    expect(transitionKind(at('en', 'about'), at('ar', 'about'))).toBe('language');
    expect(transitionKind(at('en', null), at('ar', 'contact'))).toBe('language');
  });

  it('rises for the 404 page and for staying on the same page', () => {
    expect(transitionKind(at('en', 'about'), at('en', 'notFound'))).toBe('rise');
    expect(transitionKind(at('en', 'notFound'), at('en', null))).toBe('rise');
    expect(transitionKind(at('en', 'about'), at('en', 'about'))).toBe('rise');
  });
});

describe('describeRoute', () => {
  it('reads the language and page from the nested route data', () => {
    expect(describeRoute(snapshot('ar', 'about'))).toEqual({ lang: 'ar', page: 'about' });
  });

  it('has no page name on the home page', () => {
    expect(describeRoute(snapshot('en', null))).toEqual({ lang: 'en', page: null });
  });
});

describe('onViewTransitionCreated', () => {
  const root = document.documentElement;
  const originalMatchMedia = window.matchMedia;

  function reducedMotion(matches: boolean) {
    window.matchMedia = (() => ({ matches })) as unknown as typeof window.matchMedia;
  }

  function run(from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) {
    let finish!: () => void;
    const finished = new Promise<void>((resolve) => (finish = resolve));
    const transition = { finished, skipTransition: vi.fn() };
    TestBed.runInInjectionContext(() =>
      onViewTransitionCreated({
        transition: transition as unknown as ViewTransitionInfo['transition'],
        from,
        to,
      }),
    );
    return { transition, finish };
  }

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    root.removeAttribute('data-transition');
  });

  it('marks the page with the kind of transition, and clears it when the transition ends', async () => {
    reducedMotion(false);
    const { transition, finish } = run(snapshot('en', null), snapshot('en', 'about'));
    expect(root.getAttribute('data-transition')).toBe('forward');
    expect(transition.skipTransition).not.toHaveBeenCalled();
    finish();
    await transition.finished;
    expect(root.hasAttribute('data-transition')).toBe(false);
  });

  it('uses the plain cross-fade when the language changes', () => {
    reducedMotion(false);
    run(snapshot('en', 'contact'), snapshot('ar', 'contact'));
    expect(root.getAttribute('data-transition')).toBe('language');
  });

  it('skips the animation for visitors who ask for reduced motion', () => {
    reducedMotion(true);
    const { transition } = run(snapshot('en', null), snapshot('en', 'about'));
    expect(transition.skipTransition).toHaveBeenCalledTimes(1);
    expect(root.hasAttribute('data-transition')).toBe(false);
  });
});
