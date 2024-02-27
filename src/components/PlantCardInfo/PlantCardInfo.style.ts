import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: theme.size.xxs,
	},

	plantDescription: {
		fontSize: theme.size.md,
		lineHeight: theme.size.md + theme.size.xs,
	},
}));
