import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationAZ from "./locales/az/translAZ.json";
import translationEn from "./locales/en/translEn.json";
import translationRU from "./locales/ru/translRU.json";

//translation

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/az/translAZ.json",
    },
    fallbackLng: "az",
    debug: false,
    ns: [
      "portfolio",
      "riconConstraction",
      "projects",
      "contact",
      "aboutUs",
      "services",
    ],
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });
