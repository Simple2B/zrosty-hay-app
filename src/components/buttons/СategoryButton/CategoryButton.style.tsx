import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: (isActive: boolean) => ({
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: theme.size.md,
		height: theme.size.xxl + theme.size.md,
		borderWidth: 1,
		borderColor: isActive ? theme.colors.borderGreen : theme.colors.borderGrey,
		borderRadius: theme.size.xxl,
	}),

	icon: {
		width: theme.size.md,
		height: theme.size.md,
	},

	text: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.normal,
	},
}));
