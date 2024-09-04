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
		borderColor: theme.colors.borderGrey,
		borderWidth: 1,
		backgroundColor: theme.colors.background,
		color: theme.colors.text,
		marginBottom: theme.size.md,
	},
	plantName: {
		fontSize: theme.size.lg,
		fontWeight: theme.fontWeight.bold,
		lineHeight: theme.size.lg + theme.size.xs,
		paddingRight: theme.size.md,
	},
	infoBlock: {
		flex: 1,
		flexDirection: 'column',
		gap: theme.size.sm,
	},
	plantImage: {
		width: 142,
		height: '100%',
		borderBottomLeftRadius: theme.size.xxl,
		borderTopLeftRadius: theme.size.xxl,
	},
}));
