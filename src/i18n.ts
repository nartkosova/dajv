import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

i18n
  .use(HttpBackend) // Load translations from files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Pass to react-i18next
  .init({
    fallbackLng: 'de', // Default language
    debug: true,
    ns: ["header", "hero", "latestNews", "ourStory", "slider", "whatWeDo", "footer"],
    defaultNS: "header",
    interpolation: {
      escapeValue: false // React already escapes output
    },
    backend: {
      loadPath: '/lang/{{lng}}/{{ns}}.json' // Path to translation files
    }
  })

export default i18n
