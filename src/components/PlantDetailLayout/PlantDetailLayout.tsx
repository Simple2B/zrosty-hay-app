import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import React from 'react';

import { useAPIGetPlantPhotos } from '@src/api/plants/plants';
import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { PlantPhotoSwiper } from '@src/components/PlantPhotoSwiper/PlantPhotoSwiper';
import { Spinner } from '@src/components/Spinner/Spinner';
import { queryKeys } from '@src/constants/queryKeys';
import { styleSheet } from './PlantDetailLayout.style';
import { PlantDetailTabBtns } from '../PlantDetailTabBtn/PlantDetailTabBtns';

export const PlantDetailLayout = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.wrapper}>
			<PlantPhotoSwiper />
			<View style={styles.tabBarWrapper}>
				<PlantDetailTab
					tabBar={(props) => <PlantDetailTabBtns {...props} />}
					// Maybe we will use this variant, instead PlantDetailTabBtn

					// screenOptions={{
					// 	tabBarStyle: styles.tabBar,

					// 	tabBarLabelStyle: styles.tabBarLabelStyle,
					// 	tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
					// 	tabBarActiveTintColor: '#FFFFFF',
					// 	tabBarInactiveTintColor: '#333333',
					// 	tabBarAndroidRipple: { borderless: false, radius: 0 },
					// }}
				>
					<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
					<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
					<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
				</PlantDetailTab>
			</View>
		</SafeAreaView>
	);
};
