import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet(() => ({
	wrapper: {
		height: 320,
	},
	plantImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeDot: {
		backgroundColor: '#fff',
	},
}));
