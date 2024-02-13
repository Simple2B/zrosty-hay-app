import { ScrollView } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useLocalSearchParams } from 'expo-router';

import { PlantingStep as TPlantingStep } from '@src/api/model';
import { useAPIGetPlantingSteps } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { PlantingStep } from '../PlantingStep/PlantingStep';
import { styleSheet } from './PlantingSteps.style';
import { TStapDay } from '../PlantCareBody/PlantCareBody';

type Props = {
	curStepDay: TPlantingStep | null;
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
					stepDay={step}
					handlerCurStepDay={handlerCurStepDay}
					isActive={step.day === curStepDay?.day}
				/>
			))}
		</ScrollView>
	);
};
