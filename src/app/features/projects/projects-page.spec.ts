import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../app';
import { routes } from '../../app.routes';
import { ar } from '../../i18n/translations/ar';
import { en } from '../../i18n/translations/en';
import { FEATURED_PROJECTS, OTHER_PROJECTS, PROJECTS } from './projects.data';

describe('ProjectsPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('article.projects')!;
  }

  const texts = (el: Element, selector: string) =>
    [...el.querySelectorAll(selector)].map((node) => node.textContent?.trim());

  it('has one h1, an intro and the two section headings in English', async () => {
    const el = await render('/en/projects');
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(en.nav.projects);
    expect(el.querySelector('.projects__intro')?.textContent?.trim()).toBe(en.projects.intro);
    expect(texts(el, 'h2')).toEqual([en.projects.featured, en.projects.more]);
  });

  it('has the heading, intro and section headings in Arabic', async () => {
    const el = await render('/ar/projects');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(ar.nav.projects);
    expect(el.querySelector('.projects__intro')?.textContent?.trim()).toBe(ar.projects.intro);
    expect(texts(el, 'h2')).toEqual([ar.projects.featured, ar.projects.more]);
  });

  it('shows the featured projects first, then the others, in data order', async () => {
    const el = await render('/en/projects');
    const expected = [...FEATURED_PROJECTS, ...OTHER_PROJECTS].map((p) => p.name.en);
    expect(texts(el, 'h3')).toEqual(expected);
  });

  it('links every project to its source code, and to a live demo only where there is one', async () => {
    const el = await render('/en/projects');
    const repos = [...el.querySelectorAll('a.btn--secondary')].map((a) => a.getAttribute('href'));
    expect(repos).toEqual([...FEATURED_PROJECTS, ...OTHER_PROJECTS].map((p) => p.links.repo));
    const lives = [...el.querySelectorAll('a.btn--primary')].map((a) => a.getAttribute('href'));
    expect(lives).toEqual(PROJECTS.flatMap((p) => (p.links.live ? [p.links.live] : [])));
  });

  it('shows the Arabic summary and keeps technology names in left-to-right English', async () => {
    const el = await render('/ar/projects');
    const first = PROJECTS[0];
    expect(texts(el, '.project__summary')[0]).toBe(first.summary.ar);
    for (const tag of el.querySelectorAll('.project__tag')) {
      expect(tag.getAttribute('dir')).toBe('ltr');
      expect(tag.getAttribute('lang')).toBe('en');
    }
  });

  it('shows the Arabic project name where there is one, and the English name otherwise', async () => {
    const el = await render('/ar/projects');
    const names = texts(el, 'h3');
    expect(names).toContain('التراث الثقافي الفلسطيني');
    expect(names).toContain('DevCollab');
  });

  it('shows notes with their label', async () => {
    const el = await render('/en/projects');
    const notes = texts(el, '.project__note');
    expect(notes.length).toBe(PROJECTS.filter((p) => p.note).length);
    for (const note of notes) expect(note).toContain(`${en.projects.note}:`);
  });

  it('shows the learning-project badge', async () => {
    const en_ = await render('/en/projects');
    expect(texts(en_, '.project__badge')).toEqual(['Learning project']);
  });
});

describe('projects data', () => {
  it('has unique ids', () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('links only to the owner’s GitHub repositories and pages', () => {
    for (const p of PROJECTS) {
      expect(p.links.repo, p.id).toMatch(
        /^https:\/\/github\.com\/dieaikhlayel\/[\w.-]+(\/tree\/main\/[\w.%/-]+)?$/,
      );
      if (p.links.live) {
        expect(p.links.live, p.id).toMatch(/^https:\/\/dieaikhlayel\.github\.io\/[\w.-]+\/?$/);
      }
    }
  });

  it('has an Arabic summary for every project, and an Arabic version of every note and badge', () => {
    for (const p of PROJECTS) {
      expect(p.summary.ar, p.id).toBeTruthy();
      if (p.note) expect(p.note.ar, p.id).toBeTruthy();
      if (p.badge) expect(p.badge.ar, p.id).toBeTruthy();
    }
  });

  it('lists at least one technology per project and has featured projects', () => {
    for (const p of PROJECTS) expect(p.tech.length, p.id).toBeGreaterThan(0);
    expect(FEATURED_PROJECTS.length).toBeGreaterThan(0);
  });
});
