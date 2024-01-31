import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
	},
	plants: {
		paddingHorizontal: 16,
	},
	separator: {
		height: theme.size.md,
	},
}));
