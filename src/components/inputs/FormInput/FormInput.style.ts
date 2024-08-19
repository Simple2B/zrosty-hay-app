import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	formSection: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.size.sm,

		width: '100%',
	},
	formField: (isFocused: boolean) => ({
		width: '100%',
		padding: theme.size.md,
		color: isFocused ? theme.colors.text : theme.colors.textGrey,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.md,
	}),
	formFieldTitle: {
		fontSize: theme.size.lg,
		fontWeight: '500',
	},
}));
