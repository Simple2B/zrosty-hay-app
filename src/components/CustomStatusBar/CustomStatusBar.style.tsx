import { createStyleSheet } from 'react-native-unistyles';
import Constants from 'expo-constants';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		backgroundColor: theme.colors.primary,
		height: Constants.statusBarHeight,
	},
}));
