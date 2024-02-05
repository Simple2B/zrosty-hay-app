import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},

	tabBarWrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		paddingHorizontal: theme.size.xl,
	},
}));
