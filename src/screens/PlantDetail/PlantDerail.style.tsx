import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		backgroundColor: theme.colors.background,
	},

	description: {
		gap: theme.size.lg,
	},

	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},

	paragraph: {
		fontSize: theme.size.md,
	},
}));
