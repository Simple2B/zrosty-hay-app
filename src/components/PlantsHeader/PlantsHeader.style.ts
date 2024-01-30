import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 3,
		paddingHorizontal: theme.size.lg,
		gap: theme.size.md,
		borderWidth: 3,
		borderBottomEndRadius: theme.size.xxl,
		borderBottomStartRadius: theme.size.xxl,
	},
}));
