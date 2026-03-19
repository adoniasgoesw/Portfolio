import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import dictionary from "./dictionary";

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export default function useT() {
  const { lang } = useLanguage();

  return useMemo(() => {
    const dict = dictionary[lang] ?? dictionary.en;
    const t = (path) => {
      const v = getByPath(dict, path);
      if (v != null) return v;
      const fallback = getByPath(dictionary.en, path);
      return fallback ?? path;
    };
    return t;
  }, [lang]);
}

