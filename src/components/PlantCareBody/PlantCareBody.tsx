import { View } from 'react-native';
import React, { SetStateAction, useCallback, useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { PlantingStep } from '@src/api/model';
import { PlantingSteps } from '../PlantingSteps/PlantingSteps';
import { PlantingStepTypes } from '../PlantingStepTypes/PlantingStepTypes';
import { styleSheet } from './PlantCareBody.style';
import { PlantingStepDays } from '../PlantingStepDays/PlantingStepDays';
import { TPlantScreenProps } from '@src/types/plant';
import { PlantCareTips } from '../PlantCareTips/PlantCareTips';

export type TStapDay = SetStateAction<PlantingStep | null>;

export const PlantCareBody = ({ plantUuid }: TPlantScreenProps) => {
	const { styles } = useStyles(styleSheet);
	const [curStepDay, setCurStepDay] = useState<PlantingStep | null>(null);

	const handlerCurStepDay = useCallback((day: TStapDay) => {
		setCurStepDay(day);
	}, []);

	const isCurStepDay = !!curStepDay
	const isStepTypes = isCurStepDay && !!curStepDay.stepTypes.length

	return (
		<View style={styles.wrapper}>
			<PlantingSteps handlerCurStepDay={handlerCurStepDay} curStepDay={curStepDay} plantUuid={plantUuid} />
			{isCurStepDay && <PlantingStepDays day={curStepDay.day} plantUuid={plantUuid} />}
			{isStepTypes && <PlantingStepTypes selectedStepTypeUuids={curStepDay.stepTypes.map(stepType => stepType.uuid)} />}
			<PlantCareTips plantUuid={plantUuid} />
		</View>
	);
};
