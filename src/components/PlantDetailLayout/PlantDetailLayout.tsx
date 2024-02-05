import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import React from 'react';

import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { PlantPhotoSwiper } from '@src/components/PlantPhotoSwiper/PlantPhotoSwiper';

import { styleSheet } from './PlantDetailLayout.style';
import { PlantDetailTabBtns } from '../PlantDetailTabBtns/PlantDetailTabBtns';

export const PlantDetailLayout = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.wrapper}>
			<PlantPhotoSwiper />
			<View style={styles.tabBarWrapper}>
				<PlantDetailTab tabBar={(props) => <PlantDetailTabBtns {...props} />}>
					<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
					<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
					<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
				</PlantDetailTab>
			</View>
		</SafeAreaView>
	);
};
