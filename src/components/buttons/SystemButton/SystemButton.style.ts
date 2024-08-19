import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	button: {
		backgroundColor: theme.colors.background,
		padding: theme.size.md,
		flexDirection: 'row',
		gap: theme.size.xs,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		textAlign: 'center',
		paddingVertical: theme.size.lg + theme.size.xxs,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.lg + theme.size.xxs,
	},
	buttonText: {
		color: theme.colors.textSecondary,
	},
}));
