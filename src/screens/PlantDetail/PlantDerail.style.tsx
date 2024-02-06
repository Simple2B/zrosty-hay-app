import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		backgroundColor: theme.colors.background,
	},

	infoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.sm,
	},

	subTitile: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},

	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},

	description: {
		gap: theme.size.md,
	},

	paragraph: {
		fontSize: theme.size.md,
	},

	btnMore: {
		paddingTop: theme.size.md,
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
		color: theme.colors.notification,
		textDecorationLine: 'underline',
		textDecorationColor: theme.colors.notification,
	},

	info: {
		paddingTop: theme.size.xl,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: theme.size.md,
		columnGap: theme.size.xl,
	},
}));
