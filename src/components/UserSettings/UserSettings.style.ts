import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	settingsWrapper: {
		paddingVertical: theme.size.sm,
		gap: theme.size.xxl,
		paddingHorizontal: theme.size.xl,
		flex: 1,
	},
	settingsTitleWrapper: {
		flexDirection: 'row',
	},
	settingsTitle: {
		fontSize: theme.size.lg + theme.size.xs,
		fontWeight: 'bold',
		flexShrink: 1,
		textAlign: 'center',
		width: '100%',
	},
	formSection: {
		gap: theme.size.sm,
	},
	formFieldTitle: {
		fontSize: theme.size.lg,
		fontWeight: '500',
	},
	buttonWrapper: {
		gap: theme.size.sm,
		alignSelf: 'stretch',
	},
	filler: {
		flex: 1,
	},
	backButtonBackground: {
		width: theme.size.xl,
		alignItems: 'center',
		position: 'absolute',
		top: theme.size.xxl * 2,
		left: theme.size.xl,
	},
}));
