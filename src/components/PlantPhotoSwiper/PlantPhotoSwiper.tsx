import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './PlantPhotoSwiper.style';
import { useLocalSearchParams } from 'expo-router';
import { useAPIGetPlantPhotos } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import placeholderImage from 'assets/images/plantPlaceholder.jpg';

export const PlantPhotoSwiper = () => {
	const width = Dimensions.get('window').width;
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	const { data, isLoading, isError } = useAPIGetPlantPhotos(uuid ?? '', {
		query: {
			queryKey: [queryKeys.GET_PLANT_PHOTOS, uuid],
		},
	});

	if (isLoading) {
		return <Spinner size={32} />;
	}

	if (isError) {
		// TODO temporary bind
		return <NotFound />;
	}

	return (
		<>
			{!!data?.data.length && (
				<View style={styles.wrapper}>
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
			)}
		</>
	);
};
