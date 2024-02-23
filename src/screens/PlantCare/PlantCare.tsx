import { ScrollView } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './PlantCare.style';
import { PlantCareBody } from '@src/components/PlantCareBody/PlantCareBody';
import { TPlantScreenProps } from '@src/types/plant';

export const PlantCare = ({ plantUuid }: TPlantScreenProps) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<PlantCareBody plantUuid={plantUuid} />
		</ScrollView>
	);
};
