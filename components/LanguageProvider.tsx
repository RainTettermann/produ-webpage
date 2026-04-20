"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { DICTIONARIES, LANGS, type Dictionary, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "produ.lang";

export function LanguageProvider({
  children,
  initial = "et"
}: {
  children: ReactNode;
  initial?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initial);

  // Load persisted preference
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && LANGS.includes(stored)) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  // Reflect on <html lang> for accessibility / SEO
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLangState((cur) => {
      const next: Lang = cur === "et" ? "en" : "et";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: DICTIONARIES[lang] }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
