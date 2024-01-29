import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
		heigh: 170,
		gap: theme.size.lg + theme.size.xxs,
		borderRadius: theme.size.xxl,
		shadowColor: theme.colors.shadow,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 2,
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
		borderBottomLeftRadius: 32,
		borderTopLeftRadius: 32,
		objectFit: 'cover',
	},
}));
