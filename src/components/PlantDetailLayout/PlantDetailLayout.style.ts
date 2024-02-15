import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},

	tabBarWrapper: (statusBarHeight: number) => ({
		flex: 1,
		paddingTop: theme.size.lg + statusBarHeight,
		paddingHorizontal: theme.size.xl,
	}),
}));
