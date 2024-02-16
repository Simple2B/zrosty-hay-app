import React, { useEffect } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './PlantPhotoSwiper.style';
import { useAPIGetPlantPhotos } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import placeholderImage from 'assets/images/plantPlaceholder.jpg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TPlantScreenProps } from '@src/types/plant';

export const PlantPhotoSwiper = ({ plantUuid }: TPlantScreenProps) => {
	const width = Dimensions.get('window').width;
	const { styles } = useStyles(styleSheet);

	const { data, isLoading, isError } = useAPIGetPlantPhotos(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_PHOTOS, plantUuid],
		},
	});

	if (isLoading) {
		return <Spinner size={32} />;
	}

	if (isError) {
		// TODO temporary bind
		return <NotFound />;
	}

	const statusBarHeight = useSafeAreaInsets().top;

	return (
		<>
			{data?.data.length ? (
				<View style={styles.wrapper}>
					<StatusBar barStyle='light-content' />
					<Swiper loop={false} activeDotColor={styles.activeDot.backgroundColor} width={width}>
						{data?.data.map((photo) => (
							<FastImage
								key={photo?.urlPath}
								style={styles.plantImage}
								source={{
									uri: photo?.urlPath || Image.resolveAssetSource(placeholderImage).uri,
									priority: FastImage.priority.normal,
								}}
								resizeMode={FastImage.resizeMode.cover}
							/>
						))}
					</Swiper>
				</View>
			) : (
				<View style={styles.statusbar(statusBarHeight)} />
			)}
		</>
	);
};
