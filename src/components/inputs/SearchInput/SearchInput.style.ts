import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: theme.size.xxl * 2,
		paddingHorizontal: theme.size.lg + theme.size.xxs,
		backgroundColor: theme.colors.background,
		borderRadius: theme.size.xxl,
	},
	innerWrapper: {
		gap: theme.size.xs,
	},
	title: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.medium,
	},
	serchIcon: {
		height: theme.size.xxl + theme.size.xs,
		width: theme.size.xxl + theme.size.xs,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		borderRadius: 50,
	},
}));
