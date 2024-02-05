import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './PlantPhotoSwiper.style';
import { PlantPhoto } from '@src/api/model/plantPhoto';
import { DEFAULT_PHOTOS } from '@src/constants/photos';
import { useLocalSearchParams } from 'expo-router';
import { useAPIGetPlantPhotos } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';

export const PlantPhotoSwiper = () => {
	const width = Dimensions.get('window').width;
	const { styles } = useStyles(styleSheet);
	const { uuid } = useLocalSearchParams<{ uuid: string }>();

	const { data, isLoading, isError } = useAPIGetPlantPhotos(uuid, {
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
		<View style={styles.wrapper}>
			<Swiper loop activeDotColor={styles.activeDot.backgroundColor} width={width}>
				{data?.data.length && !!data.data.length
					? data.data.map((photo) => (
							<FastImage
								key={photo?.urlPath}
								style={styles.plantImage}
								source={{
									uri: photo?.urlPath,
									priority: FastImage.priority.normal,
								}}
								resizeMode={FastImage.resizeMode.cover}
							/>
					  ))
					: DEFAULT_PHOTOS.map((photo) => (
							<FastImage
								key={photo.uri}
								style={styles.plantImage}
								source={{
									uri: photo.uri,
									priority: FastImage.priority.normal,
								}}
								resizeMode={FastImage.resizeMode.cover}
							/>
					  ))}
			</Swiper>
		</View>
	);
};
