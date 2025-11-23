import 'server-only';
import { default as ar } from './dictionaries/ar';
import { default as en } from './dictionaries/en';
import { default as fr } from './dictionaries/fr';
import { default as id } from './dictionaries/id';
import { default as tr } from './dictionaries/tr';
import type { Locale } from './i18n-config';

const dictionaries = {
  en,
  ar,
  tr,
  id,
  fr
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale] || dictionaries.en;
};
