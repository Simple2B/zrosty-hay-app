import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: theme.size.md,
		gap: theme.size.xs,
		height: theme.size.xxl + theme.size.md,
		borderWidth: 1,
		borderRadius: theme.size.xxl,
	},
}));
