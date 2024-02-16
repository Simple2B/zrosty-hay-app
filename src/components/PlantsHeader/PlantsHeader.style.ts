import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	wrapper: (headerHeight: number) => ({
		alignItems: 'center',
		gap: theme.size.md,
		paddingTop: theme.size.lg + headerHeight,
		paddingBottom: theme.size.lg,
		paddingHorizontal: theme.size.lg,
		borderBottomLeftRadius: theme.size.xxl,
		borderBottomRightRadius: theme.size.xxl,
	}),
}));
