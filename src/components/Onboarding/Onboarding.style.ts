import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flex: 1,
	},
	slideWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.size.md,
		paddingHorizontal: theme.size.xxl,
	},
	title: {
		fontSize: theme.size.xxl,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subtitle: {
		fontSize: theme.size.lg,
		textAlign: 'center',
	},
	activeDot: {
		backgroundColor: theme.colors.border,
		width: theme.size.lg,
		height: theme.size.xs,
	},
	dot: {
		width: theme.size.xs,
		height: theme.size.xs,
		backgroundColor: theme.colors.border,
		opacity: 0.3,
	},
	imageCircle: {
		borderRadius: theme.size.xxl * 10,
		backgroundColor: theme.colors.border,
		width: theme.size.xxl * 10,
		height: theme.size.xxl * 10,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	buttonWrapper: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		position: 'absolute',
		top: 300,
		left: 0,
		flex: 1,
	},
	nextButton: {
		marginRight: theme.size.xxl,
		padding: theme.size.md,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
		borderRadius: theme.size.xxl,
		width: theme.size.xl * 2,
		height: theme.size.xl * 2,
	},
	nextButtonWrapper: {
		position: 'absolute',
		bottom: theme.size.md,
		right: theme.size.xxs,
	},
	arrowIcon: {
		padding: theme.size.md,
	},
}));
