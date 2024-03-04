import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../../../src/assets/language/en.json';
import vi from '../../../src/assets/language/vi.json';

export const defaultLanguage = 'vi';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
