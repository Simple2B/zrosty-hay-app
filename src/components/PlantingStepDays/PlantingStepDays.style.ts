import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.lg,
		borderRadius: theme.size.xxl,
		paddingHorizontal: theme.size.lg,
		paddingTop: theme.size.xl,
		paddingBottom: theme.size.xl,
		borderColor: theme.colors.borderGrey,
		borderWidth: 1,
	},
}));
