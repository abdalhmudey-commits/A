"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, startTransition } from 'react';
import { getDictionary } from '@/lib/dictionaries-client';
import type { Dictionary } from '@/lib/dictionaries-client';
import { Locale, i18n } from '@/lib/i18n-config';
import { usePathname, useRouter } from 'next/navigation';


interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ 
    children,
    initialLanguage,
    initialDictionary
}: { 
    children: ReactNode,
    initialLanguage: Locale,
    initialDictionary: Dictionary
}) => {
  const [language, setLanguage] = useState<Locale>(initialLanguage);
  const [dictionary, setDictionary] = useState(initialDictionary);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLanguage = localStorage.getItem('language') as Locale;
    if (storedLanguage && i18n.locales.includes(storedLanguage)) {
        if(storedLanguage !== language) {
            handleSetLanguage(storedLanguage, true);
        }
    }
  }, [language]);


  useEffect(() => {
    if (isMounted) {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, isMounted]);

  const handleSetLanguage = (lang: Locale, initialLoad = false) => {
    if(!initialLoad) { // Don't save to LS on initial load if it's already there
        localStorage.setItem('language', lang);
    }
    
    setLanguage(lang);
    
    getDictionary(lang).then(newDict => {
      startTransition(() => {
        setDictionary(newDict);
      });
    });
  };
  
  if (!isMounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
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
