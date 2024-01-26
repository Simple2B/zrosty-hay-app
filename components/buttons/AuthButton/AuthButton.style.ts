import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: theme.size.md,
		height: theme.size.xl + theme.size.xl + theme.size.sm,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.lg + theme.size.xxs,
	},
	text: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
}));
