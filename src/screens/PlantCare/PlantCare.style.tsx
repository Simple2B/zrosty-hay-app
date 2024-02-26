import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		paddingTop: theme.size.xxl,
		flex: 1,
	},
}));
