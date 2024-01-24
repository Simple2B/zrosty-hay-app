import { D } from 'msw/lib/core/RequestHandler-CwjkprZE';
import { spacings } from './spacings';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		text: '#333',
		background: '#ffffff',
		primary: '#2F5233',
		card: '#94C874',
		notification: '#76B947',
		border: '#B1D8B7',
		water: '#6FA9FF',
		sun: '#FFDA69',
		leaf: '#94C874',
		soil: '#B4ADFF',
	},
	margins: spacings,
	paddings: spacings,
} as const;

export const darkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		text: '#333',
		background: '#ffffff',
		primary: '#2F5233',
		card: '#94C874',
		notification: '#76B947',
		border: '#B1D8B7',
		water: '#6FA9FF',
		sun: '#FFDA69',
		leaf: '#94C874',
		soil: '#B4ADFF',
	},
	margins: spacings,
	paddings: spacings,
} as const;
