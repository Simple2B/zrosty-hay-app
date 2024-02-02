import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
		paddingTop: theme.size.sm,
		paddingBottom: theme.size.sm,
	},
	plants: {
		paddingHorizontal: theme.size.lg,
		paddingVertical: theme.size.lg + theme.size.xs,
	},
	loader: {
		paddingTop: theme.size.md,
		paddingBottom: theme.size.md,
		paddingHorizontal: theme.size.md,
	},
	separator: {
		height: theme.size.md,
	},
}));
