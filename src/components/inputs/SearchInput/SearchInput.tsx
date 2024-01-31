import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import SearchIcon from '@assets/icons/searchicon.svg';

import { styleSheet } from './SearchInput.style';

type Props = {
	title: string;
	placeholder: string;
};

export const SearchInput = ({ title, placeholder }: Props) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<View style={styles.innerWrapper}>
				<Text style={styles.title}>{title}</Text>
				<TextInput placeholder={placeholder} />
			</View>
			<View style={styles.serchIcon}>
				<SearchIcon />
			</View>
		</View>
	);
};
