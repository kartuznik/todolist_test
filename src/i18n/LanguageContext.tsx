import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { en } from './en';
import { ru } from './ru';
import type { Lang, Translations } from './types';

export const LANG_STORAGE_KEY = 'todolist-lang';

const DICTIONARIES: Record<Lang, Translations> = {
  ru,
  en,
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === 'ru' || value === 'en';
}

export function readStoredLang(): Lang {
  try {
    if (typeof localStorage === 'undefined') {
      return 'ru';
    }
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return isLang(stored) ? stored : 'ru';
  } catch {
    return 'ru';
  }
}

function applyDocumentLanguage(lang: Lang, t: Translations): void {
  document.documentElement.lang = lang;
  document.title = t.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', t.meta.description);
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const t = DICTIONARIES[lang];

  useEffect(() => {
    applyDocumentLanguage(lang, t);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Privacy mode: keep the in-memory language.
    }
  }, [lang, t]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return value;
}
