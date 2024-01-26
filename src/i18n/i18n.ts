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
