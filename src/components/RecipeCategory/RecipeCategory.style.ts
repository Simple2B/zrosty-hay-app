import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		height: theme.size.xl + theme.size.xxs,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.size.xxl,
		backgroundColor: theme.colors.border,
	},
	name: {
		paddingHorizontal: theme.size.sm,
		fontSize: theme.size.sm,
	},
}));
