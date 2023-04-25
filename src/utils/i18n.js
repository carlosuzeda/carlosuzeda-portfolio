import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import pt from './pt.json'

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).init({
    compatibilityJSON: 'V3',
    lng: 'en',
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    resources:{
        en: en,
        pt: pt
    },
    react:{
        useSuspense: false,
    },
    interpolation:{
        escapeValue: false,
    }
})

export default i18n;