import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { PlantingStep as PlantingStepType } from '@src/api/model';
import { styleSheet } from './PlantingStep.style';

type Props = PlantingStepType & {};

export const PlantingStep = ({ day, stepTypes }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<TouchableOpacity style={styles.wrapper}>
			<Text style={styles.dayTitle}>{`${t('day')} ${day}`}</Text>
			<View style={styles.colorsWrapper}>
				{stepTypes?.map((step) => (
					<View key={step.uuid} style={styles.circle(step.color)} />
				))}
			</View>
		</TouchableOpacity>
	);
};
