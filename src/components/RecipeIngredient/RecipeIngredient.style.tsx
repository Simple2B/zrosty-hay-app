import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: theme.size.lg,
		borderWidth: 1,
		borderRadius: theme.size.md,
		borderColor: theme.colors.borderGrey,
		paddingHorizontal: theme.size.lg,
		paddingVertical: theme.size.sm,
	},

	photoWrapper: {
		width: theme.size.xl * 2,
		height: theme.size.xl * 2,
	},

	photo: {
		flex: 1,
		borderRadius: theme.size.sm,
	},

	textWrapper: {
		justifyContent: 'center',
		gap: theme.size.xs,
	},

	name: {
		fontSize: theme.size.md,
	},

	quantityText: {
		fontSize: theme.size.md,
		color: theme.colors.text,
	},
}));
