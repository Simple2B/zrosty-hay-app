import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
	},
	innerContainer: {
		flex: theme.size.xl,
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.xl,
		paddingHorizontal: theme.size.xl,
	},

	innerTop: {
		textAlign: 'center',
		gap: theme.size.md,
	},

	innerButtons: {
		alignSelf: 'stretch',
		gap: theme.size.sm,
	},

	title: {
		textAlign: 'center',
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},
	titleColor: {
		color: theme.colors.notification,
	},

	subTitle: {
		textAlign: 'center',
		fontSize: theme.size.lg + theme.size.xs,
	},
	link: {
		flex: 1,
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
		color: theme.colors.notification,
		textAlign: 'center',
		textAlignVertical: 'center',
		textDecorationLine: 'underline',
		textDecorationColor: theme.colors.notification,
	},

	topLeaf: {
		zIndex: 100,
		position: 'absolute',
		top: theme.size.xl * 2,
		right: 0,
	},
	buttonLeaf: {
		zIndex: 100,
		position: 'absolute',
		bottom: theme.size.xl * 2,
		left: 0,
	},
}));
