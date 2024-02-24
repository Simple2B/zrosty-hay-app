import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	dotIndicator: (selected: boolean) => ({
		width: selected ? theme.size.lg : theme.size.xxs + theme.size.xs,
		height: 6,
		borderRadius: 6,
		marginHorizontal: 3,
		backgroundColor: theme.colors.border,
		opacity: selected ? 1 : 0.3,
	}),
	nextButton: {
		marginRight: theme.size.xxl,
		padding: theme.size.md,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.xxl,
	},
	arrowIcon: {
		padding: theme.size.md,
	},
}));
