import { useCallback, useEffect, useMemo, useState } from 'react';
import { SUPPORTED_LANGS, t as translate } from './translations';

function normalizeLang(value) {
  if (!value) return null;
  if (SUPPORTED_LANGS.includes(value)) return value;
  const lower = String(value).toLowerCase();
  if (lower.startsWith('zh')) return 'zh-Hant';
  if (lower.startsWith('en')) return 'en';
  return null;
}

export default function useI18n() {
  const [lang, setLang] = useState(() => {
    const fromStorage = normalizeLang(window.localStorage.getItem('tea-website.lang'));
    const fromNavigator = normalizeLang(navigator.language);
    return fromStorage ?? fromNavigator ?? 'zh-Hant';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('tea-website.lang', lang);
  }, [lang]);

  const t = useCallback((keyPath) => translate(lang, keyPath), [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'zh-Hant' ? 'en' : 'zh-Hant'));
  }, []);

  return useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      supported: SUPPORTED_LANGS,
    }),
    [lang, setLang, toggleLang, t],
  );
}
