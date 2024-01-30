import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		gap: theme.size.md,
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	plants: {
		flex: 4,
	},
}));
