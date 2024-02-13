import { ScrollView } from 'react-native';
import React, { SetStateAction, memo } from 'react';
import { useStyles } from 'react-native-unistyles';
import { useLocalSearchParams } from 'expo-router';

import { useAPIGetPlantingSteps } from '@src/api/plants/plants';
import { PlantingStep } from '../PlantingStep/PlantingStep';
import { styleSheet } from './PlantingSteps.style';
import { queryKeys } from '@src/constants/queryKeys';
import { TStapDay } from '../PlantCareBody/PlantCareBody';

type Props = {
	curStepDay: number | null;
	handlerCurStepDay: (day: TStapDay) => void;
};

export const PlantingSteps = ({ curStepDay, handlerCurStepDay }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	const plantUuid = uuid ?? '';

	const { data } = useAPIGetPlantingSteps(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_STEPS, plantUuid],
		},
	});

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.steps}>
			{data?.data.map((step) => (
				<PlantingStep
					key={step.day}
					{...step}
					handlerCurStepDay={handlerCurStepDay}
					isActive={step.day === curStepDay}
				/>
			))}
		</ScrollView>
	);
};
