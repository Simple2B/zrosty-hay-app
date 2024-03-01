import { View, TextInput, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import SearchIcon from '@assets/icons/searchicon.svg';
import { maxLength } from '@src/constants/inputs';
import { styleSheet } from './SearchInput.style';

type Props = {
	title: string;
	placeholder: string;
	value: string;
	onChangeText: (value: string) => void;
};

export const SearchInput = ({ title, placeholder, value, onChangeText }: Props) => {
	const { styles, theme } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<View style={styles.innerWrapper}>
				<Text style={styles.title}>{title}</Text>
				<TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} maxLength={maxLength} placeholderTextColor={theme.colors.borderGrey} />
			</View>
			<View style={styles.serchIcon}>
				<SearchIcon />
			</View>
		</View>
	);
};
