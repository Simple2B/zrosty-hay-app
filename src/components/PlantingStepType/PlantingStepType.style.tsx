import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.sm,
		paddingHorizontal: theme.size.xs,
	},
	name: {
		flex: 1,
		fontSize: theme.size.md,
	},
}));
