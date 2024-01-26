import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.md,
		height: 56,
		width: theme.width.wfull,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.lg + theme.size.xxs,
	},
	text: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
}));
