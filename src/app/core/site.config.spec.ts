import { PHONE_DISPLAY, SITE_LINKS, displayUrl } from './site.config';

describe('site config', () => {
  it('shortens addresses for display', () => {
    expect(displayUrl('https://www.linkedin.com/in/diea-ikhlayel')).toBe(
      'linkedin.com/in/diea-ikhlayel',
    );
    expect(displayUrl('https://github.com/dieaikhlayel')).toBe('github.com/dieaikhlayel');
  });

  it('lists the public contact details', () => {
    expect(Object.keys(SITE_LINKS)).toEqual(['email', 'phone', 'linkedin', 'github']);
  });

  it('shows the phone number in a readable form that matches the dialled number', () => {
    expect(PHONE_DISPLAY.replaceAll(' ', '')).toBe(SITE_LINKS.phone);
  });
});
