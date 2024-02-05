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
	tabBarBorder: {
		// height: 50,
		// padding: 4,
		backgroundColor: 'green',
	},

	tabBar: {
		marginHorizontal: theme.size.md,
		marginVertical: theme.size.xl,
		// borderColor: 'red',
		// borderWidth: 1,
		backgroundColor: 'red',
		padding: 4,
		borderRadius: theme.size.xxl,
		shadowColor: theme.colors.background,
	},
	tabBarLabelStyle: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	},
	tabBarIndicatorStyle: {
		height: 'auto',
		top: 0,
		// marginVertical: theme.size.xs,
		// margin: 4,
		backgroundColor: theme.colors.primary,
		borderRadius: theme.size.xxl,
	},
}));
