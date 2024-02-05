import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './PlantPhotoSwiper.style';
import { PlantPhoto } from '@src/api/model/plantPhoto';
import { DEFAULT_PHOTOS } from '@src/constants/photos';

type PlantPhotoSwiperProps = {
	plantPhotos: PlantPhoto[];
};

export const PlantPhotoSwiper = ({ plantPhotos }: PlantPhotoSwiperProps) => {
	const { styles } = useStyles(styleSheet);

	const width = Dimensions.get('window').width;

	return (
		<View style={styles.wrapper}>
			<Swiper loop activeDotColor={styles.activeDot.backgroundColor} width={width}>
				{plantPhotos.length > 1
					? plantPhotos.map((photo) => (
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
