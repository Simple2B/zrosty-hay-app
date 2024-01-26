import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { sizes } from './sizes';
import { fontWeights } from './fontweights';
import { widths } from './widths';

export const lightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		borderGrey: '#0000002E',
		// These colors overrides default values from react navigation themes.
		//  They will influence the default look of navigation-related primitives.
		text: '#333', // The text color of various elements.
		background: '#ffffff', //The color of various backgrounds, such as background color for the screens.
		primary: '#2F5233', //The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
		card: '#94C874', //The background color of card-like elements, such as headers, tab bars etc.
		notification: '#76B947', // The color of Tab Navigator badge.
		border: '#B1D8B7', // The color of borders, e.g. header border, tab bar border etc.
		// These are the project-specific colors
		water: '#6FA9FF',
		sun: '#FFDA69',
		leaf: '#94C874',
		soil: '#B4ADFF',
	},
	width: widths,
	fontWeight: fontWeights,
	size: sizes,
} as const;

export const darkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		borderGrey: '#0000002E',
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
	width: widths,
	fontWeight: fontWeights,
	size: sizes,
} as const;
