import 'client-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  ar: () => import('./dictionaries/ar').then((module) => module.default),
  tr: () => import('./dictionaries/tr').then((module) => module.default),
  id: () => import('./dictionaries/id').then((module) => module.default),
  fr: () => import('./dictionaries/fr').then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries['en']>>;


export const getDictionary = async (locale: Locale) => {
    const loader = dictionaries[locale] || dictionaries.en;
    return loader();
};
