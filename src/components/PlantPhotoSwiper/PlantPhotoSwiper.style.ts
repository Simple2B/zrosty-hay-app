import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	statusbar: (statusbarHeight: number) => ({
		paddingTop: statusbarHeight,
	}),
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
	backIconwrapper: (statusbarHeight: number) => ({
		paddingTop: statusbarHeight,
		position: 'absolute',
		zIndex: 1000,
		top: theme.size.xl,
		left: theme.size.xl,
	}),
}));
