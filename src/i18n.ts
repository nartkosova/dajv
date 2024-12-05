import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "de", // Default language
    fallbackLng: "de",
    debug: true,
    ns: [
      "header",
      "hero",
      "latestNews",
      "ourStory",
      "slider",
      "whatWeDo",
      "footer",
    ],
    defaultNS: "header",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/lang/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    saveMissing: true, // Save missing keys (optional, for debugging)
  });

export default i18n;
