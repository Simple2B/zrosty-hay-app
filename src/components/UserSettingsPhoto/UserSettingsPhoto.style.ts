import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	profileImageWrapper: {
		width: theme.size.md * 10,
		height: theme.size.md * 10,
		backgroundColor: theme.colors.background,
		borderRadius: 44 / 2,
		alignSelf: 'center',
	},
	image: {
		flex: 1,
		borderRadius: 44 / 2,
	},
}));
