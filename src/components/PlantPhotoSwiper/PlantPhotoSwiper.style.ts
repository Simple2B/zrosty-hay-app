import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		height: theme.size.xxl * 10,
		backgroundColor: theme.colors.primary,
	},
	plantImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeDot: {
		backgroundColor: '#fff',
	},
}));
