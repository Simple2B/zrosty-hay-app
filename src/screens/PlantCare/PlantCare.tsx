import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { PlantingSteps } from '@src/components/PlantingSteps/PlantingSteps';
import CalendarIcon from '@assets/icons/calendar.svg';
import LeftIconDirection from '@assets/icons/leftIcon.svg';
import RightIconDirection from '@assets/icons/rightIcon.svg';
import { PlantingStepTypes } from '@src/components/PlantingStepTypes/PlantingStepTypes';
import { sizes } from '@src/styling/sizes';
import { styleSheet } from './PlantCare.style';

export const PlantCare = () => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<View style={styles.header}>
				<View style={styles.titleWrapper}>
					<CalendarIcon width={sizes.xl} height={sizes.xl} />
					<Text style={styles.title}>{t('careCalendarText')}</Text>
				</View>
				<View style={styles.direction}>
					<LeftIconDirection width={sizes.md} height={sizes.lg} />
					<RightIconDirection width={sizes.md} height={sizes.lg} />
				</View>
			</View>

			<PlantingSteps />
			<PlantingStepTypes />
		</ScrollView>
	);
};
