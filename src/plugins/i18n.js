import { createI18n } from 'vue-i18n';
import en from '../locales/en';
import ru from '../locales/ru';

const messages = {
  en,
  ru,
};

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
  missing: (locale, key) => {
    console.log('🚀 ~ TRANSLATE_ME:', `${key} - ${locale}`);
    return `TRANSLATE_ME "${key}"`;
  },
});

export default i18n;
