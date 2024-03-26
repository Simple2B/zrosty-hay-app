import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: (isActive: boolean) => ({
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: theme.size.md,
		gap: theme.size.xs,
		height: theme.size.xxl + theme.size.md,
		borderWidth: 1,
		borderColor: isActive ? theme.colors.borderGreen : theme.colors.borderGrey,
		borderRadius: theme.size.xxl,
		backgroundColor: isActive ? theme.colors.primary : 'white',
	}),

	icon: {
		width: theme.size.md,
		height: theme.size.md,
	},

	text: (isActive: boolean) => ({
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.normal,
		color: isActive ? 'white' : theme.colors.text,
	}),
}));
