import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	selectorWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
		gap: theme.size.sm,
	},
}));
