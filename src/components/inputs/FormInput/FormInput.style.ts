import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	formSection: {
		flexDirection: 'column',
		gap: theme.size.sm,
		width: '100%',
	},
	formField: {
		width: '100%',
		padding: theme.size.md,
		borderWidth: theme.size.one,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.md,
		variants: {
			isFocused: {
				true: {
					color: theme.colors.text,
				},
				false: {
					color: theme.colors.textSecondary,
				},
			},
		},
	},
	formFieldTitle: {
		fontSize: theme.size.lg,
		fontWeight: '500',
	},
}));
