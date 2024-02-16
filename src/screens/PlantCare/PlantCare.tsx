import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import CalendarIcon from '@assets/icons/calendar.svg';
import { sizes } from '@src/styling/sizes';
import { styleSheet } from './PlantCare.style';
import { PlantCareBody } from '@src/components/PlantCareBody/PlantCareBody';
import { TPlantScreenProps } from '@src/types/plant';

export const PlantCare = ({ plantUuid }: TPlantScreenProps) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<View style={styles.header}>
				<View style={styles.titleWrapper}>
					<CalendarIcon width={sizes.xl} height={sizes.xl} />
					<Text style={styles.title}>{t('careCalendarText')}</Text>
				</View>
			</View>

			<PlantCareBody plantUuid={plantUuid} />
		</ScrollView>
	);
};
