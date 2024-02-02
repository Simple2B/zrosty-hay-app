import { useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { View, SafeAreaView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { styleSheet } from './PlantDerail.style';
import { useAPIGet } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { useTranslation } from 'react-i18next';

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
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
			<PlantDetailTab
				screenOptions={{
					tabBarActiveTintColor: '#e91e63',
					tabBarLabelStyle: { fontSize: 12 },
					tabBarStyle: { backgroundColor: 'powderblue' },
				}}
			>
				<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
				<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
				<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
			</PlantDetailTab>
		</SafeAreaView>
	);
}
