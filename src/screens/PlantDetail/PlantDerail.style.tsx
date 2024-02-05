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
		gap: theme.size.lg,
	},

	paragraph: {
		fontSize: theme.size.md,
	},
}));
