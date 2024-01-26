import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
	},

	plantDesription: {
		fontSize: theme.size.md,
		lineHeight: theme.size.md + theme.size.xs,
	},
}));
