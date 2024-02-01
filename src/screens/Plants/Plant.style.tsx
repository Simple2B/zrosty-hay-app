import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
	},
	plants: {
		paddingHorizontal: theme.size.lg,
		paddingVertical: theme.size.lg + theme.size.xs,
	},
	separator: {
		height: theme.size.md,
	},
}));
