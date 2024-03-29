import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	steps: {
		paddingTop: theme.size.xl,
		gap: theme.size.sm,
		paddingHorizontal: theme.size.xxs,
		zIndex: 1000
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.sm,
	},

	title: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},

	direction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.md,
	},
}));
