import type { Metadata } from "next";
import { LanguageProvider } from "@/context/language-context";
import { getDictionary } from '@/lib/dictionaries-server';
import { i18n } from '@/lib/i18n-config';
import { headers } from 'next/headers';
import "./globals.css";

export const metadata: Metadata = {
  title: "ترك العادات السيئة",
  description: "تطبيق يساعدك على بناء عادات أفضل والبقاء متحفزًا.",
};

const ThemeProvider = () => {
  const script = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        console.error('Failed to apply theme from localStorage', e);
      }
    })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const acceptLanguage = headers().get('accept-language');
  let lang: 'en' | 'ar' | 'tr' | 'id' | 'fr' = i18n.defaultLocale;
  
  if (acceptLanguage) {
    const langs = acceptLanguage.split(',').map(l => l.split(';')[0].split('-')[0]);
    for (const l of langs) {
      if (i18n.locales.includes(l as any)) {
        lang = l as any;
        break;
      }
    }
  }

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <ThemeProvider />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider initialLanguage={lang} initialDictionary={dictionary}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
