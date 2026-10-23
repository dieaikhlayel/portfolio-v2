import { TestBed } from '@angular/core/testing';
import { SITE_LINKS } from '../../site.config';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  async function render() {
    const fixture = TestBed.createComponent(SiteFooter);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('links to email, LinkedIn and GitHub', async () => {
    const el = await render();
    const hrefs = [...el.querySelectorAll('a')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([`mailto:${SITE_LINKS.email}`, SITE_LINKS.linkedin, SITE_LINKS.github]);
  });

  it('does not publish a phone number', async () => {
    const el = await render();
    expect(el.innerHTML).not.toContain('tel:');
    expect(el.textContent).not.toMatch(/\+?\d[\d\s-]{7,}/);
  });
});
