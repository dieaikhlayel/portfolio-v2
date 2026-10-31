/** Public contact details used across the site. */
export const SITE_LINKS = {
  email: 'dieaikh@gmail.com',
  phone: '+970594014711',
  linkedin: 'https://www.linkedin.com/in/diea-ikhlayel',
  github: 'https://github.com/dieaikhlayel',
} as const;

/** The phone number as people write it. It appears on the Contact page only. */
export const PHONE_DISPLAY = '+970 59 401 4711';

/** Shows a web address without "https://" and "www.", for example linkedin.com/in/diea-ikhlayel. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
