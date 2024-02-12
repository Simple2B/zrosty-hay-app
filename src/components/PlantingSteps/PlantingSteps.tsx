import { ScrollView } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useLocalSearchParams } from 'expo-router';

import { useAPIGetPlantingSteps } from '@src/api/plants/plants';
import { PlantingStep } from '../PlantingStep/PlantingStep';
import { styleSheet } from './PlantingSteps.style';

export const PlantingSteps = () => {
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	const { data } = useAPIGetPlantingSteps(uuid ?? '');

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.steps}>
			{data?.data.map((step) => (
				<PlantingStep key={step.day} {...step} />
			))}
		</ScrollView>
	);
};
