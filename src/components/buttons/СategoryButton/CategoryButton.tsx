import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './CategoryButton.style';

export const CategoryButton = () => {
	const { styles } = useStyles(styleSheet);

	// TODO add handle

	return (
		<TouchableOpacity style={styles.wrapper}>
			<Text style={styles.text}>hi</Text>
		</TouchableOpacity>
	);
};
