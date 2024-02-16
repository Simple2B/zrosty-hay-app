import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { StatusBar, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { PlantPhotoSwiper } from '@src/components/PlantPhotoSwiper/PlantPhotoSwiper';

import { styleSheet } from './PlantDetailLayout.style';
import { PlantDetailTabBtns } from '../PlantDetailTabBtns/PlantDetailTabBtns';
import { TPlantScreenProps } from '@src/types/plant';

export const PlantDetailLayout = ({ plantUuid }: TPlantScreenProps) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.wrapper} edges={['bottom']}>
			<PlantPhotoSwiper plantUuid={plantUuid} />
			<View style={styles.tabBarWrapper}>
				<StatusBar barStyle='dark-content' />

				<PlantDetailTab tabBar={(props) => <PlantDetailTabBtns {...props} plantUuid={plantUuid} />}>
					<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
					<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
					<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
				</PlantDetailTab>
			</View>
		</SafeAreaView>
	);
};
