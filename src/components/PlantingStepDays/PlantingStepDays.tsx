import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useLocalSearchParams } from 'expo-router';

import { useAPIGetPlantingStepByDay } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { styleSheet } from './PlantingStepDays.style';
import { Spinner } from '../Spinner/Spinner';
import { PlantingStepDay } from '../PlantingStepDay/PlantingStepDay';

type Props = {
	day: number;
};

export const PlantingStepDays = ({ day }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();
	const plantUuid = uuid ?? '';
	const { data, isLoading, isError } = useAPIGetPlantingStepByDay(plantUuid, day, {
		query: {
			queryKey: [queryKeys.GET_PLANT_STEP_DAY, plantUuid, day],
		},
	});

	if (isLoading || isError) {
		// TODO temporary bind error
		return <Spinner />;
	}

	return (
		<View style={styles.wrapper}>
			{data?.data.map((dayData) => (
				<PlantingStepDay
					key={dayData.uuid}
					svgIcon={dayData.svgIcon}
					name={dayData.name}
					instruction={dayData.instruction}
				/>
			))}
		</View>
	);
};
