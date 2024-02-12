import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		height: theme.size.md * 5,
		width: theme.size.xxl * 2,
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.lg,
		borderWidth: 1,
		borderRadius: theme.size.md,
		borderColor: theme.colors.borderGrey,
	},
	dayTitle: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.medium,
	},
	colorsWrapper: {
		gap: theme.size.sm * -0.3,
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: (color: string) => ({
		height: theme.size.sm,
		width: theme.size.sm,
		backgroundColor: color,
		color: color,
		borderRadius: theme.size.xxl,
	}),
}));
