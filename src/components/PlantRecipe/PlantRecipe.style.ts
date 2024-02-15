import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		height: 170,
		flexDirection: 'row',
		alignSelf: 'stretch',
		borderRadius: theme.size.xxl,
		borderColor: theme.colors.borderGrey,
		borderWidth: 1,
		gap: theme.size.lg + theme.size.xxs,
		marginBottom: theme.size.md,
	},

	content: {
		flex: 1,
		justifyContent: 'center',
		gap: theme.size.lg,
		paddingRight: theme.size.xl,
	},
	title: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},
	description: {
		fontSize: theme.size.md,
	},

	categories: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.xs,
	},
	recipeImage: {
		width: 142,
		height: 168,
		borderBottomLeftRadius: theme.size.xxl,
		borderTopLeftRadius: theme.size.xxl,
	},
}));
