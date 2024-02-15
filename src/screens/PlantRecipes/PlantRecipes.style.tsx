import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		backgroundColor: theme.colors.background,
	},
	recipes: {
		paddingVertical: theme.size.lg + theme.size.xs,
	},
	loader: {
		paddingTop: theme.size.md,
		paddingBottom: theme.size.md,
		paddingHorizontal: theme.size.md,
	},
}));
