import { Text, View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './RecipeCategory.style';

type Props = {
	name: string;
};

export const RecipeCategory = ({ name }: Props) => {
	const { styles } = useStyles(styleSheet);
	return (
		<View style={styles.wrapper}>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
};
