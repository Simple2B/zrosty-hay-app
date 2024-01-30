import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	categories: {
		flex: 1,
		gap: theme.size.xs,
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},
}));
