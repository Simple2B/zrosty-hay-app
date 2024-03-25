import { Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './Onboarding.style';

import Onboarding1 from '@assets/images/onboarding/onboarding1.png';
import Onboarding2 from '@assets/images/onboarding/onboarding2.png';
import Onboarding3 from '@assets/images/onboarding/onboarding3.png';
import ArrowRight from '@assets/icons/arrowRight.svg';
import { useOnboardingStatus } from '@src/hooks/useOnboardingStatus';

export const OnboardingScreen = () => {
	const { hasOnboardingSeen, setOnboardingStatus } = useOnboardingStatus();
	const { t } = useTranslation();
	const [keyNumber, setKeyNumber] = useState(0);
	const swiperRef = React.createRef<Swiper>();
	const { styles } = useStyles(styleSheet);
	const navigation = useNavigation();
	const router = useRouter();

	useEffect(() => {
		if (hasOnboardingSeen) {
			router.push('/login/');
		}
	}, [hasOnboardingSeen, router]);

	const onDone = () => {
		console.log('done');
		setOnboardingStatus(true);
		(navigation as any).navigate('login/index');
	};

	const onboardData = useMemo(
		() => [
			{
				image: (
					<View style={styles.imageCircle}>
						<Image source={Onboarding1} />
					</View>
				),
				title: t('onboardingTitle1'),
				subtitle: t('onboardingSubtitle1'),
			},
			{
				image: (
					<View style={styles.imageCircle}>
						<Image source={Onboarding2} />
					</View>
				),
				title: t('onboardingTitle2'),
				subtitle: t('onboardingSubtitle2'),
			},
			{
				image: (
					<View style={styles.imageCircle}>
						<Image source={Onboarding3} />
					</View>
				),
				title: t('onboardingTitle3'),
				subtitle: t('onboardingSubtitle3'),
			},
		],
		[t, styles.imageCircle],
	);

	const renderNextButton = () => {
		const isLasSlide = keyNumber === onboardData.length - 1;

		const handlePress = () => {
			if (isLasSlide) {
				onDone();
			} else {
				swiperRef.current?.scrollBy(1);
			}
		};
		return (
			<TouchableOpacity style={styles.nextButtonWrapper} onPress={handlePress}>
				<View style={styles.nextButton}>
					<ArrowRight style={styles.arrowIcon} />
				</View>
			</TouchableOpacity>
		);
	};

	const handleIndexChange = (index: number) => {
		setKeyNumber(index);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<Swiper
				loop={false}
				activeDotStyle={styles.activeDot}
				dotStyle={styles.dot}
				buttonWrapperStyle={styles.buttonWrapper}
				ref={swiperRef}
				onIndexChanged={handleIndexChange}
			>
				{onboardData.map((slide) => (
					<>
						<View key={slide.title} style={styles.slideWrapper}>
							{slide.image}
							<Text style={styles.title}>{slide.title}</Text>
							<Text style={styles.subtitle}>{slide.subtitle}</Text>
						</View>
						{renderNextButton()}
					</>
				))}
			</Swiper>
		</SafeAreaView>
	);
};
