import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.md,
		paddingTop: theme.size.lg,
		paddingHorizontal: theme.size.lg,
		paddingBottom: theme.size.lg,
		borderBottomLeftRadius: theme.size.xxl,
		borderBottomRightRadius: theme.size.xxl,
	},
}));
