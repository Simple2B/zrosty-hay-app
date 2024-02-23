import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: theme.size.md,
	},

	inner: {
		justifyContent: 'center',
		gap: theme.size.xs,
	},

	title: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
		lineHeight: theme.size.md + theme.size.xs,
	},
	subTitle: {
		fontSize: theme.size.md,
		lineHeight: theme.size.md + theme.size.xs,
	},
}));
