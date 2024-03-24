import { ScrollView, View, Text } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import CalendarIcon from '@assets/icons/calendar.svg';
import { PlantingStep as TPlantingStep } from '@src/api/model';
import { useAPIGetPlantingSteps } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { PlantingStep } from '../PlantingStep/PlantingStep';
import { styleSheet } from './PlantingSteps.style';
import { TStapDay } from '../PlantCareBody/PlantCareBody';
import { TPlantScreenProps } from '@src/types/plant';
import { sizes } from '@src/styling/sizes';
import { useTranslation } from 'react-i18next';

type Props = TPlantScreenProps & {
	curStepDay: TPlantingStep | null;
	handlerCurStepDay: (day: TStapDay) => void;
};

export const PlantingSteps = ({ curStepDay, handlerCurStepDay, plantUuid }: Props) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const { data } = useAPIGetPlantingSteps(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_STEPS, plantUuid],
		},
	});

	if (!data?.data.length) {
		return <></>;
	}

	return (
		<View>
			<View style={styles.header}>
				<View style={styles.titleWrapper}>
					<CalendarIcon width={sizes.xl} height={sizes.xl} />
					<Text style={styles.title}>{t('careCalendarText')}</Text>
				</View>
			</View>
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
		</View>
	);
};
