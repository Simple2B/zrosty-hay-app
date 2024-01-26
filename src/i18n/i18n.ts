import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsUA from './ua.json';
import translationsEN from './en.json';

const resources = {
	en: {
		translation: translationsEN,
	},
	he: {
		translation: translationsUA,
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: 'ua', // default language
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		supportedLngs: ['ua', 'en'],
	});

export default i18n;
