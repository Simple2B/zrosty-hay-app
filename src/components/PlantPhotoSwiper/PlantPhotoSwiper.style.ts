import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: (statusBarHeight: number) => ({
		paddingTop: statusBarHeight,
		height: theme.size.xxl * 10,
		backgroundColor: theme.colors.primary,
	}),
	plantImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeDot: {
		backgroundColor: '#fff',
	},
}));
