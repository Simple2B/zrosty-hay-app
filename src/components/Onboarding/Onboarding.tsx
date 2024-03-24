import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, SafeAreaView, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './Onboarding.style';
import useGetOnboardingStatus from '@src/hooks/useGetOnboardingStatus';
import { DotIndicator } from './OnboardingButtons/Indicator';
import { Next } from './OnboardingButtons/Next';

import Onboarding1 from '@assets/images/onboarding/onboarding1.png';
import Onboarding2 from '@assets/images/onboarding/onboarding2.png';
import Onboarding3 from '@assets/images/onboarding/onboarding3.png';

export const OnboardingScreen = () => {
	const { isFirstLaunch, isLoading: onboardingIsLoading } = useGetOnboardingStatus();
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const navigation = useNavigation();

	useEffect(() => {
		if (!onboardingIsLoading && !isFirstLaunch) {
			(navigation as any).navigate('login/index');
		}
	}, [isFirstLaunch, onboardingIsLoading, navigation]);

	const setOnboardingStatus = async () => {
		try {
			await AsyncStorage.setItem('hasOnboardingSeen', 'false');
		} catch (error) {
			// Error saving data
			console.log(error);
		}
	};
	const onDone = () => {
		setOnboardingStatus();
		(navigation as any).navigate('login/index');
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<Onboarding
				DotComponent={DotIndicator}
				DoneButtonComponent={Next}
				NextButtonComponent={Next}
				bottomBarColor='#fff'
				showSkip={false}
				onDone={onDone}
				pages={[
					{
						backgroundColor: '#fff',
						image: (
							<View style={styles.imageCircle}>
								<Image source={Onboarding1} />
							</View>
						),
						title: t('onboardingTitle1'),
						subtitle: t('onboardingSubtitle1'),
					},
					{
						backgroundColor: '#fff',
						image: (
							<View style={styles.imageCircle}>
								<Image source={Onboarding2} />
							</View>
						),
						title: t('onboardingTitle2'),
						subtitle: t('onboardingSubtitle2'),
					},
					{
						backgroundColor: '#fff',
						image: (
							<View style={styles.imageCircle}>
								<Image source={Onboarding3} />
							</View>
						),
						title: t('onboardingTitle3'),
						subtitle: t('onboardingSubtitle3'),
					},
				]}
			/>
		</SafeAreaView>
	);
};
