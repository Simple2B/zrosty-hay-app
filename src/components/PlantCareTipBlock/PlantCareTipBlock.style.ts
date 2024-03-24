import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: theme.size.lg,
		borderWidth: 1,
		borderRadius: theme.size.xl,
		borderColor: theme.colors.borderGrey,
		padding: theme.size.md,
	},
	subTitle: {
		paddingLeft: theme.size.md,
	},
	title: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.xs,
	},
	description: {
		color: theme.colors.text,
	},
	showMore: {
		alignSelf: 'center',
		fontWeight: theme.fontWeight.bold,
		color: theme.colors.notification,
	},
}));
