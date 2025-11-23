export const i18n = {
  defaultLocale: 'ar',
  locales: ['en', 'ar', 'tr', 'id', 'fr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
