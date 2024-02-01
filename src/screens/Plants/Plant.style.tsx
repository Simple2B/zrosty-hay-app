import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
		paddingTop: theme.size.sm,
		paddingBottom: theme.size.sm,
	},
	plants: {
		paddingHorizontal: 16,
	},
	separator: {
		height: theme.size.md,
	},
}));
