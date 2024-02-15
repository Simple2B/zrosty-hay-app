import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	cardWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
		heigh: 170,
		gap: theme.size.lg + theme.size.xxs,
		borderRadius: theme.size.xxl,
		backgroundColor: theme.colors.background,
		color: theme.colors.text,
		borderWidth: 1,
		borderColor: theme.colors.borderGrey,
	},
	plantName: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
		lineHeight: theme.size.lg + theme.size.xs,
	},
	infoBlock: {
		flex: 1,
		flexDirection: 'column',
		gap: theme.size.sm,
	},
	plantImage: {
		width: 142,
		height: 170,
		borderBottomLeftRadius: theme.size.xxl,
		borderTopLeftRadius: theme.size.xxl,
	},
}));
