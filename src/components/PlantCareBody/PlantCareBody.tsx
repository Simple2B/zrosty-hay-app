import { View } from 'react-native';
import React, { SetStateAction, useCallback, useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { PlantingStep } from '@src/api/model';
import { PlantingSteps } from '../PlantingSteps/PlantingSteps';
import { PlantingStepTypes } from '../PlantingStepTypes/PlantingStepTypes';
import { styleSheet } from './PlantCareBody.style';
import { PlantingStepDays } from '../PlantingStepDays/PlantingStepDays';

export type TStapDay = SetStateAction<PlantingStep | null>;

export const PlantCareBody = () => {
	const { styles } = useStyles(styleSheet);
	const [curStepDay, setCurStepDay] = useState<PlantingStep | null>(null);

	const handlerCurStepDay = useCallback((day: TStapDay) => {
		setCurStepDay(day);
	}, []);

	return (
		<View style={styles.wrapper}>
			<PlantingSteps handlerCurStepDay={handlerCurStepDay} curStepDay={curStepDay} />
			{!!curStepDay && <PlantingStepDays day={curStepDay.day} />}
			<PlantingStepTypes selectedStepTypeUuids={curStepDay?.stepTypes.map((stepType) => stepType.uuid) ?? null} />
		</View>
	);
};
