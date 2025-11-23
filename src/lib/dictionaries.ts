const dictionaries = {
  en: {
    mainTabs: {
      home: "Home",
      habits: "Habits",
      remembrances: "Remembrances",
      settings: "Settings",
    },
  },
  ar: {
    mainTabs: {
      home: "الرئيسية",
      habits: "العادات",
      remembrances: "الأذكار",
      settings: "الإعدادات",
    },
  },
  // TODO: Add other languages
  tr: {
    mainTabs: {
      home: "Ana Sayfa",
      habits: "Alışkanlıklar",
      remembrances: "Zikirler",
      settings: "Ayarlar",
    },
  },
  id: {
    mainTabs: {
      home: "Beranda",
      habits: "Kebiasaan",
      remembrances: "Dzikir",
      settings: "Pengaturan",
    },
  },
  fr: {
    mainTabs: {
      home: "Accueil",
      habits: "Habitudes",
      remembrances: "Souvenirs",
      settings: "Paramètres",
    },
  },
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale];
