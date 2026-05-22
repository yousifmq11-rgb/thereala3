"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "@/types/booking";
import { t, Translations } from "@/lib/translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: "fi",
  setLang: () => {},
  tr: t.fi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fi");
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
