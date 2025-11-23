"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getDictionary, Locale } from '@/lib/dictionaries';

type Dictionary = ReturnType<typeof getDictionary>;

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('ar');
  const [dictionary, setDictionary] = useState(getDictionary('ar'));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLanguage = localStorage.getItem('language') as Locale;
    if (storedLanguage && ['en', 'ar', 'tr', 'id', 'fr'].includes(storedLanguage)) {
      handleSetLanguage(storedLanguage);
    } else {
      handleSetLanguage('ar');
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, isMounted]);

  const handleSetLanguage = (lang: Locale) => {
    setLanguage(lang);
    setDictionary(getDictionary(lang));
    if (isMounted) {
      localStorage.setItem('language', lang);
    }
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
