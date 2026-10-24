import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../../../app';
import { routes } from '../../../app.routes';
import { ar } from '../../../i18n/translations/ar';
import { en } from '../../../i18n/translations/en';
import { SKILL_GROUPS } from '../skills.data';

describe('SkillsSection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
  });

  async function render(url: string) {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('section.skills')!;
  }

  const shown = (el: Element) =>
    [...el.querySelectorAll('.skills__tag')].map((li) => li.textContent?.trim());

  it('shows the English title, intro and group labels', async () => {
    const el = await render('/en');
    expect(el.querySelector('h2')?.textContent?.trim()).toBe(en.home.skills.title);
    expect(el.querySelector('.skills__intro')?.textContent?.trim()).toBe(en.home.skills.intro);
    const labels = [...el.querySelectorAll('h3')].map((h) => h.textContent?.trim());
    expect(labels).toEqual(SKILL_GROUPS.map((g) => en.home.skills.groups[g.id]));
  });

  it('shows the Arabic title, intro and group labels', async () => {
    const el = await render('/ar');
    expect(el.querySelector('h2')?.textContent?.trim()).toBe(ar.home.skills.title);
    const labels = [...el.querySelectorAll('h3')].map((h) => h.textContent?.trim());
    expect(labels).toEqual(SKILL_GROUPS.map((g) => ar.home.skills.groups[g.id]));
  });

  it('has a translated label for every group, in both dictionaries', () => {
    const ids = SKILL_GROUPS.map((g) => g.id).sort();
    expect(Object.keys(en.home.skills.groups).sort()).toEqual(ids);
    expect(Object.keys(ar.home.skills.groups).sort()).toEqual(ids);
  });

  it('lists every skill from the data file, once, in order (English)', async () => {
    const el = await render('/en');
    expect(shown(el)).toEqual(SKILL_GROUPS.flatMap((g) => g.items.map((i) => i.en)));
  });

  it('shows Arabic names for topics and English names for tools (Arabic page)', async () => {
    const el = await render('/ar');
    expect(shown(el)).toEqual(SKILL_GROUPS.flatMap((g) => g.items.map((i) => i.ar ?? i.en)));
    const tags = [...el.querySelectorAll('.skills__tag')];
    const angular = tags.find((t) => t.textContent?.trim() === 'Angular')!;
    expect(angular.getAttribute('lang')).toBe('en');
    expect(angular.getAttribute('dir')).toBe('ltr');
    const topic = tags.find((t) => t.textContent?.trim() === 'أمن الشبكات')!;
    expect(topic.getAttribute('lang')).toBe('ar');
    expect(topic.getAttribute('dir')).toBe('rtl');
  });

  it('gives every networking, security and support skill an Arabic translation', () => {
    for (const group of SKILL_GROUPS.filter((g) => g.id === 'security' || g.id === 'support')) {
      for (const skill of group.items) {
        expect(skill.ar, skill.en).toBeTruthy();
      }
    }
  });

  it('never shows percentages or progress bars', async () => {
    const el = await render('/en');
    expect(el.textContent).not.toContain('%');
    expect(el.querySelector('progress, [role="progressbar"], meter')).toBeNull();
  });

  it('has no duplicate skills in the data file', () => {
    const all = SKILL_GROUPS.flatMap((g) => g.items.map((i) => i.en));
    expect(new Set(all).size).toBe(all.length);
  });
});
