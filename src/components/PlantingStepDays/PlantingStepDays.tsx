import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { useAPIGetPlantingStepByDay } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { styleSheet } from './PlantingStepDays.style';
import { Spinner } from '../Spinner/Spinner';
import { PlantingStepDay } from '../PlantingStepDay/PlantingStepDay';
import { TPlantScreenProps } from '@src/types/plant';

type Props = TPlantScreenProps & {
	day: number;
};

export const PlantingStepDays = ({ day, plantUuid }: Props) => {
	const { styles } = useStyles(styleSheet);
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
