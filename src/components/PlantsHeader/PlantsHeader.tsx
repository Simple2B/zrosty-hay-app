import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './PlantsHeader.style';
type Props = {};

export const PlantsHeader = (props: Props) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<Text>header</Text>
		</View>
	);
};
