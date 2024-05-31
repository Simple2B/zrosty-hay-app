import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingBottom: theme.size.xxl,
		paddingHorizontal: theme.size.lg,
	},

	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},

	detail: {
		paddingTop: theme.size.xxl,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: theme.size.xxl + theme.size.lg,
	},

	detailColumn: {
		gap: theme.size.sm,
		justifyContent: 'center',
		alignItems: 'center',
	},
	detailColumnTitle: {
		color: theme.colors.borderGreen,
		fontSize: theme.size.md,
	},
	detailCoulumText: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	},
}));
