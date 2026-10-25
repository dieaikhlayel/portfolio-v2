/** Public contact links used across the site. The phone number is deliberately not included. */
export const SITE_LINKS = {
  email: 'dieaikh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/diea-ikhlayel',
  github: 'https://github.com/dieaikhlayel',
} as const;

/** Shows a web address without "https://" and "www.", for example linkedin.com/in/diea-ikhlayel. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
