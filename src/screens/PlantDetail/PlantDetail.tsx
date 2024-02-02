import { useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { View, SafeAreaView, Text } from 'react-native';

import { styleSheet } from './PlantDerail.style';
import { useLocalSearchParams } from 'expo-router';

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams();

	console.log(uuid, 'uuid');

	return (
		<SafeAreaView style={styles.wrapper}>
			<Text>{uuid}</Text>
		</SafeAreaView>
	);
}
