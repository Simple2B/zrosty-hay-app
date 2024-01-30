import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
	},
	header: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	plants: {
		flex: 6,
	},
}));
