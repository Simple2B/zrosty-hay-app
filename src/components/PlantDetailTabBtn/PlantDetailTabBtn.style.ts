import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	tabBar: {
		height: 40,
		paddingTop: theme.size.xs,
		paddingBottom: theme.size.xs,
		paddingHorizontal: theme.size.xs,
		borderWidth: 1,
		borderRadius: theme.size.xxl,

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		gap: theme.size.xl,
		borderColor: theme.colors.borderGrey,
	},
	tabBarItemwrapper: (isFocused: boolean) => ({
		height: theme.size.xxl,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.size.xxl,
		backgroundColor: isFocused ? theme.colors.primary : theme.colors.background,
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	}),
	tabBarItem: (isFocused: boolean) => ({
		color: isFocused ? theme.colors.background : theme.colors.text,
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	}),
}));
