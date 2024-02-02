import { useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { View, SafeAreaView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { styleSheet } from './PlantDerail.style';
import { useAPIGet } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid: string }>();

	const { data, isLoading, isError } = useAPIGet(uuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL],
		},
	});

	if (isLoading) {
		return <Spinner size={64} />;
	}

	if (isError) {
		return <NotFound />;
	}

	console.log(data, 'data');

	return (
		<SafeAreaView style={styles.wrapper}>
			<Text>{data?.data.name}</Text>
		</SafeAreaView>
	);
}
