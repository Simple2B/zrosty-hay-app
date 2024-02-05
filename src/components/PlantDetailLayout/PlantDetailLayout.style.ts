import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},

	tabBarWrapper: {
		flex: 1,
		paddingHorizontal: theme.size.xl,
	},

	tabBar: {
		marginHorizontal: theme.size.md,
		marginVertical: theme.size.md,
		borderRadius: theme.size.xxl,
		borderColor: theme.colors.borderGrey,
	},
	tabBarLabelStyle: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	},
	tabBarIndicatorStyle: {
		height: 'auto',
		top: 0,
		padding: 4,
		backgroundColor: theme.colors.primary,
		borderRadius: theme.size.xxl,
	},
}));
