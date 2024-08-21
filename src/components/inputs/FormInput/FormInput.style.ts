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
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center',
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
	textInput: {
		flex: 1,
	},
	spinnerWrapper: {
		variants: {
			isPending: {
				true: {
					opacity: 1,
				},
				false: {
					opacity: 0,
				},
			},
		},
	},
}));
