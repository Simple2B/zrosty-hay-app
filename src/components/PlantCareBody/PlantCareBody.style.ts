import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		paddingTop: theme.size.lg,
		paddingBottom: theme.size.xxl,
		gap: theme.size.xl,
	},
}));
