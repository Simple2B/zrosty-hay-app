import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	profile: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	profileEmail: {
		color: theme.colors.background,
	},
}));
