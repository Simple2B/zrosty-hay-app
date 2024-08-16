import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	tabWrapper: {
		textAlign: 'center',
		borderWidth: 1,
		borderRadius: theme.size.lg,
		padding: theme.size.md + theme.size.xxs,
		width: '100%',
		flex: 1,
	},
	selected: {
		borderColor: theme.colors.primary,
	},
	unselected: {
		borderColor: theme.colors.borderGrey,
	},
}));
