import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	steps: {
		paddingTop: theme.size.xl,
		gap: theme.size.sm,
		paddingHorizontal: theme.size.xxs,
	},
}));
