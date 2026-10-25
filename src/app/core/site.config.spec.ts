import { SITE_LINKS, displayUrl } from './site.config';

describe('site config', () => {
  it('shortens addresses for display', () => {
    expect(displayUrl('https://www.linkedin.com/in/diea-ikhlayel')).toBe(
      'linkedin.com/in/diea-ikhlayel',
    );
    expect(displayUrl('https://github.com/dieaikhlayel')).toBe('github.com/dieaikhlayel');
  });

  it('does not include a phone number', () => {
    expect(Object.keys(SITE_LINKS)).toEqual(['email', 'linkedin', 'github']);
  });
});
