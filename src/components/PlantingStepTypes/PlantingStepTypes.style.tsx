import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
	},

	inner: {
		flex: 1,
		rowGap: theme.size.sm,
	},
}));
