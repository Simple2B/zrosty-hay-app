import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { StatusBar, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { PlantPhotoSwiper } from '@src/components/PlantPhotoSwiper/PlantPhotoSwiper';

import { styleSheet } from './PlantDetailLayout.style';
import { PlantDetailTabBtns } from '../PlantDetailTabBtns/PlantDetailTabBtns';

export const PlantDetailLayout = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();
	const [hasPlanPhoto, setHasPlanPhoto] = useState<boolean>(false);

	const setIsPhotoState = () => {
		setHasPlanPhoto(true);
	};

	const plantUuid = uuid ?? '';

	const statusBarHeight = useSafeAreaInsets().top;
	const statusBarHeightToAdd = hasPlanPhoto ? 0 : statusBarHeight;

	return (
		<SafeAreaView style={styles.wrapper} edges={['bottom']}>
			<PlantPhotoSwiper setHasPlanPhoto={setIsPhotoState} />
			<View style={styles.tabBarWrapper(statusBarHeightToAdd)}>
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
