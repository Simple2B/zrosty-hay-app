import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	icon: {
		width: theme.size.lg,
	},
	smallIcon: {
		width: theme.size.md,
	},
}));
