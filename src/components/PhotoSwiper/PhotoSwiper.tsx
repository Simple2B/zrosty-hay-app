import React from 'react';
import { Dimensions, Pressable, StatusBar } from 'react-native';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { Link, router } from 'expo-router';

import { styleSheet } from './PhotoSwiper.style';
import BackIcon from '@assets/icons/leftIcon.svg';
import placeholderImage from 'assets/images/plantPlaceholder.jpg';
import { sizes } from '@src/styling/sizes';
import { Photo } from '@src/api/model';

interface PhotoSwiperProps {
	photos: Photo[];
	isGoBack?: boolean;
}

export const PhotoSwiper = ({ photos, isGoBack = false }: PhotoSwiperProps) => {
	const width = Dimensions.get('window').width;
	const { styles } = useStyles(styleSheet);
	const statusBarHeight = useSafeAreaInsets().top;

	const goBack = () => {
		router.back();
	};

	return (
		<>
			{photos.length ? (
				<View style={styles.wrapper}>
					<StatusBar barStyle='light-content' />
					{!isGoBack ? (
						<Link href='/plants/' asChild>
							<Pressable style={styles.backIconwrapper(statusBarHeight)}>
								<View style={styles.backButtonBackground}>
									<BackIcon width={sizes.lg} height={sizes.lg} />
								</View>
							</Pressable>
						</Link>
					) : (
						<Pressable onPress={goBack} style={styles.backIconwrapper(statusBarHeight)}>
							<View style={styles.backButtonBackground}>
								<BackIcon width={sizes.lg} height={sizes.lg} />
							</View>
						</Pressable>
					)}
					<Swiper loop={false} activeDotColor={styles.activeDot.backgroundColor} width={width}>
						{photos.map((photo) => (
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
