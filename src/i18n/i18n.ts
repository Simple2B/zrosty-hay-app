import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import en from './en.json';
import ua from './ua.json';

export enum Language {
	ENGLISH = 'en',
	UKRAINIAN = 'ua',
}

export const languageResource = {
	en: { translation: en },
	ua: { translation: ua },
};

i18next.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: Language.UKRAINIAN,
	fallbackLng: Language.UKRAINIAN,
	resources: languageResource,
});
