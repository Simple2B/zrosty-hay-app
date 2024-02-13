import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.size.sm,
	},
	title: {
		fontSize: theme.size.md,
	},
	instruction: {
		fontSize: theme.size.md,
		color: theme.colors.text,
	},
}));
