import 'client-only';

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  ar: () => import('./dictionaries/ar').then((module) => module.default),
  tr: () => import('./dictionaries/tr').then((module) => module.default),
  id: () => import('./dictionaries/id').then((module) => module.default),
  fr: () => import('./dictionaries/fr').then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries['en']>>;
export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
