import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},

	tabBarWrapper: {
		flex: 1,
		paddingHorizontal: theme.size.xl,
		// backgroundColor: 'red',
	},

	tabBar: {
		marginHorizontal: theme.size.md,
		marginVertical: theme.size.xl,
		// borderColor: theme.colors.borderGrey,
		// borderWidth: 1,
		borderRadius: theme.size.xxl,
	},
	tabBarLabelStyle: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	},
	tabBarIndicatorStyle: {
		height: 'auto',
		top: 0,
		// marginVertical: theme.size.xs,
		backgroundColor: theme.colors.primary,
		borderRadius: theme.size.xxl,
	},
}));
