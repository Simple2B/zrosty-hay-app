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

	helloText: {
		color: theme.colors.background,
		fontSize: theme.size.lg,
	},

	profileImageWrapper: {
		width: theme.size.xxl + theme.size.sm,
		height: theme.size.xxl + theme.size.sm,
		backgroundColor: theme.colors.background,
		borderRadius: 44 / 2,
	},

	image: {
		flex: 1,
		borderRadius: 44 / 2,
	},
}));
