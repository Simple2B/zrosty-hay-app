import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.xl,
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

	tipBlock: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: theme.size.lg,
		borderWidth: 1,
		borderRadius: theme.size.xl,
		borderColor: theme.colors.borderGrey,
		padding: theme.size.md,
	},

	tipTitle: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
	tipRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.xs,
	},
	tipDescription: {
		color: theme.colors.text,
	},
	tipShowMore: {
		alignSelf: 'center',
		fontWeight: theme.fontWeight.bold,
		color: theme.colors.notification,
	},
}));
