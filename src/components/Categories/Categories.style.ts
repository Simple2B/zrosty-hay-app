import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		paddingHorizontal: theme.size.lg,
		gap: theme.size.md,
	},
	title: {
		fontSize: theme.size.lg + theme.size.xs,
		fontWeight: theme.fontWeight.bold,
	},
	categories: {
		gap: theme.size.xs,
	},
}));
