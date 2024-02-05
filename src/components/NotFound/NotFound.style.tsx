import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.lg,
	},
	title: {
		color: theme.colors.notification,
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},

	backBtn: {
		fontSize: theme.size.xl,
		fontWeight: theme.fontWeight.medium,
	},
}));
