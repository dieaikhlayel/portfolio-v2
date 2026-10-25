import { resolveLocalized } from './localized';

describe('resolveLocalized', () => {
  it('uses English, left-to-right, on the English site', () => {
    expect(resolveLocalized({ en: 'Hello', ar: 'مرحبا' }, 'en')).toEqual({
      text: 'Hello',
      lang: 'en',
      dir: 'ltr',
    });
  });

  it('uses the Arabic text, right-to-left, on the Arabic site', () => {
    expect(resolveLocalized({ en: 'Hello', ar: 'مرحبا' }, 'ar')).toEqual({
      text: 'مرحبا',
      lang: 'ar',
      dir: 'rtl',
    });
  });

  it('keeps English names as left-to-right English on the Arabic site', () => {
    expect(resolveLocalized({ en: 'Udacity' }, 'ar')).toEqual({
      text: 'Udacity',
      lang: 'en',
      dir: 'ltr',
    });
  });
});
