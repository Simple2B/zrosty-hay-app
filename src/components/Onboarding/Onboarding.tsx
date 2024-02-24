import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './Onboarding.style';

import Onboarding1 from '@assets/images/onboarding/onboarding1.png';
import Onboarding2 from '@assets/images/onboarding/onboarding2.png';
import Onboarding3 from '@assets/images/onboarding/onboarding3.png';

import { DotIndicator } from './OnboardingButtons/Indicator';
import { Next } from './OnboardingButtons/Next';

export const OnboardingScreen = () => {
	const { styles } = useStyles(styleSheet);
	const navigation = useNavigation();

	const onDone = () => {
		console.log('Done');
		(navigation as any).navigate('login/index');
	};

	//TODO: fix text displaying, indicators at the left, save to storage, translate text

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
						title: 'ЗростиГай ваш садовий помічник',
						subtitle: 'Додаток для догляду за рослинами, що зробить догляд за рослинами простим і приємним',
					},
					{
						backgroundColor: '#fff',
						image: (
							<View style={styles.imageCircle}>
								<Image source={Onboarding2} />
							</View>
						),
						title: 'Все для ваших рослин',
						subtitle:
							'Знайомтесь з новими рослинами. Створіть план догляду за кілька кліків. Отримуйте корисні поради для догляду за рослинами.',
					},
					{
						backgroundColor: '#fff',
						image: (
							<View style={styles.imageCircle}>
								<Image source={Onboarding3} />
							</View>
						),
						title: 'Догляд за рослинами без зусиль!',
						subtitle: 'Відстежуйте дії, отримуйте нагадування, насолоджуйтесь пишними та здоровими рослинами',
					},
				]}
			/>
		</SafeAreaView>
	);
};
