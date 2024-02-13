import { View, Text } from 'react-native';
import React, { SetStateAction, useCallback, useState } from 'react';
import { PlantingSteps } from '../PlantingSteps/PlantingSteps';
import { PlantingStepTypes } from '../PlantingStepTypes/PlantingStepTypes';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCareBody.style';

export type TStapDay = SetStateAction<number | null>;

export const PlantCareBody = () => {
	const { styles } = useStyles(styleSheet);
	const [curStepDay, setCurStepDay] = useState<number | null>(null);

	const handlerCurStepDay = useCallback((day: TStapDay) => {
		setCurStepDay(day);
	}, []);

	console.log(curStepDay, 'curStepDay');

	return (
		<View style={styles.wrapper}>
			<PlantingSteps handlerCurStepDay={handlerCurStepDay} curStepDay={curStepDay} />
			<PlantingStepTypes />
		</View>
	);
};
