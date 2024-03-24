import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
	},
	imageCircle: {
		borderRadius: theme.size.xxl * 10,
		backgroundColor: theme.colors.border,
		width: theme.size.xxl * 10,
		height: theme.size.xxl * 10,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
}));
