import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
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
	subTitle: {
		paddingLeft: theme.size.md,
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
