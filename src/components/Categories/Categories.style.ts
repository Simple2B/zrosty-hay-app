import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		gap: theme.size.md,
	},
	title: {
		paddingHorizontal: theme.size.lg,
		fontSize: theme.size.lg + theme.size.xs,
		fontWeight: theme.fontWeight.bold,
	},
	categories: {
		gap: theme.size.xs,
		paddingHorizontal: theme.size.lg,
	},
}));
