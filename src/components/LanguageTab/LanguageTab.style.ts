import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	tabWrapper: {
		textAlign: 'center',
		borderWidth: 1,
		borderRadius: theme.size.lg,
		padding: theme.size.md + theme.size.xxs,
		width: '100%',
		flex: 1,
		variants: {
			active: {
				true: {
					borderColor: theme.colors.primary,
				},
				false: {
					borderColor: theme.colors.borderGrey,
				},
			},
		},
	},
}));
