import { ScrollView } from 'react-native';
import React from 'react';

import { PlantCareBody } from '@src/components/PlantCareBody/PlantCareBody';
import { TPlantScreenProps } from '@src/types/plant';

export const PlantCare = ({ plantUuid }: TPlantScreenProps) => {

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<PlantCareBody plantUuid={plantUuid} />
		</ScrollView>
	);
};
