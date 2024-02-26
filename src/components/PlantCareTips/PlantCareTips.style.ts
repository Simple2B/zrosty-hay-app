import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
		paddingBottom: theme.size.xxl,
	},

	titleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.xs,
	},

	title: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
}));
