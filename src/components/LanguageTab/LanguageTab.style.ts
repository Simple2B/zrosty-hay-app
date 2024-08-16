import { createStyleSheet } from 'react-native-unistyles';

export const styleSheet = createStyleSheet((theme) => ({
	tabWrapper: (isSelected: boolean) => ({
		textAlign: 'center',
		borderWidth: 1,
		borderColor: isSelected ? theme.colors.primary : theme.colors.borderGrey,
		borderRadius: theme.size.lg,
		padding: theme.size.md + theme.size.xxs,
		width: '100%',
		flex: 1,
	}),
}));
