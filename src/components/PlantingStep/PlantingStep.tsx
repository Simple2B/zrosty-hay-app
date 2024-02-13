import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { PlantingStep as TPlantingStepType } from '@src/api/model';
import { styleSheet } from './PlantingStep.style';
import { TStapDay } from '../PlantCareBody/PlantCareBody';

type Props = {
	stepDay: TPlantingStepType;
	handlerCurStepDay: (day: TStapDay) => void;
	isActive: boolean;
};

export const PlantingStep = memo(({ stepDay, isActive, handlerCurStepDay }: Props) => {
	const { styles } = useStyles(styleSheet, {
		isActive,
	});
	const { t } = useTranslation();

	const onPress = () => {
		handlerCurStepDay(isActive ? null : stepDay);
	};

	return (
		<TouchableOpacity style={styles.wrapper} onPress={onPress}>
			<Text style={styles.dayTitle}>{`${t('day')} ${stepDay.day}`}</Text>
			<View style={styles.colorsWrapper}>
				{stepDay.stepTypes?.map((step) => (
					<View key={step.uuid} style={styles.circle(step.color)} />
				))}
			</View>
		</TouchableOpacity>
	);
});
