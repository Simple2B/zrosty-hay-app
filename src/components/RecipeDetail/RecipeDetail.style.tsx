import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		paddingBottom: theme.size.xxl,
		paddingHorizontal: theme.size.lg,
	},

	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},

	subTitle: {
		paddingTop: theme.size.lg,
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
	},

	detail: {
		paddingTop: theme.size.xxl,
		paddingBottom: theme.size.lg,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: theme.size.xxl + theme.size.lg,
	},

	detailColumn: {
		gap: theme.size.sm,
		justifyContent: 'center',
		alignItems: 'center',
	},
	detailColumnTitle: {
		color: theme.colors.borderGreen,
		fontSize: theme.size.md,
	},
	detailCoulumText: {
		fontSize: theme.size.md,
		fontWeight: theme.fontWeight.bold,
	},

	ingredientsWrapper: {
		paddingVertical: theme.size.md,
		gap: theme.size.xs,
	},

	additionalIngredientWrapper: {
		paddingLeft: theme.size.xs,
		paddingTop: theme.size.md,
		paddingBottom: theme.size.xs,
	},
	additionalIngredientText: {
		fontSize: theme.size.md,
	},

	recipeSteps: {
		paddingVertical: theme.size.lg,
		gap: theme.size.lg,
	},
}));
