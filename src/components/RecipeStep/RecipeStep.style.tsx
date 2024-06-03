import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		alignSelf: 'stretch',
		alignItems: 'center',
		flexDirection: 'row',
		gap: theme.size.md,
	},

	text: {
		fontSize: theme.size.md,
		flexShrink: 1,
	},

	stepNumber: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
		color: theme.colors.border,
	},
}));
