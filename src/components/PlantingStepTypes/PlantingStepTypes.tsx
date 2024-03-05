import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { useAPIGetAllPlantingStepTypes } from '@src/api/planting-step-types/planting-step-types';
import { sizes } from '@src/styling/sizes';
import { PlantingStepType as TPlantingStepType } from '@src/api/model';
import { styleSheet } from './PlantingStepTypes.style';
import { PlantingStepType } from '../PlantingStepType/PlantingStepType';
import { Spinner } from '../Spinner/Spinner';
import { queryKeys } from '@src/constants/queryKeys';

type Props = {
	selectedStepTypeUuids: string[];
};

export const PlantingStepTypes = ({ selectedStepTypeUuids }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { data, isLoading } = useAPIGetAllPlantingStepTypes({
		query: {
			queryKey: [queryKeys.GET_PLANT_STEP_TYPES],
		},
	});

	if (isLoading) {
		return <Spinner size={sizes.xxl * 2} />;
	}

	const splitLists = data?.data
		.filter((item) => (selectedStepTypeUuids ? selectedStepTypeUuids.includes(item.uuid) : true))
		.reduce(
			(acc, item, idx) => {
				if (idx % 2 === 0) {
					acc.odd.push(item);
				} else {
					acc.even.push(item);
				}
				return acc;
			},
			{ odd: [], even: [] } as { odd: TPlantingStepType[]; even: TPlantingStepType[] },
		);

	return (
		<View style={styles.wrapper}>
			<View style={styles.inner}>
				{splitLists?.odd.map((item) => (
					<PlantingStepType key={item.uuid} {...item} />
				))}
			</View>
			<View style={styles.inner}>
				{splitLists?.even.map((item) => (
					<PlantingStepType key={item.uuid} {...item} />
				))}
			</View>
		</View>
	);
};
