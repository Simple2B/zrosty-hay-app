import { useStyles } from 'react-native-unistyles';

import { Link, SplashScreen } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Text, StatusBar, Platform } from 'react-native';

import { AuthButton } from '@src/components/buttons/AuthButton/AuthButton';
import { AuthBtnType } from '@src/components/buttons/AuthButton/AuthButton.constans';
import TopLeaf from '@assets/icons/topLeaf.svg';
import ButtonLeaf from '@assets/icons/buttonLeaf.svg';

import { styleSheet } from './Login.style';
import { useGoogleLogin } from '@src/hooks/useGoogleLogin';
import { useEffect } from 'react';
import { useAppleLogin } from '@src/hooks/useAppleLogin';

const isIos = Platform.OS === 'ios';
export default function LoginScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const { handleGoogleLogin, loading: googleAuthLoading } = useGoogleLogin();
	const { handleAppleLogin, isPending: appleAuthLoading } = useAppleLogin();
	const isLoading = googleAuthLoading || appleAuthLoading;

	useEffect(() => {
		SplashScreen.hideAsync();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle='dark-content' />

			<View style={styles.innerContainer}>
				<View style={styles.innerTop}>
					<Text style={styles.title}>
						{t('login.title')}
						<Text style={styles.titleColor}>{t('login.growName')}</Text>
					</Text>

					<Text style={styles.subTitle}>{t('login.subTitle')}</Text>
				</View>
				<View style={styles.innerButtons}>
					<AuthButton type={AuthBtnType.google} onPress={handleGoogleLogin} disabled={isLoading} />
					{isIos && <AuthButton type={AuthBtnType.apple} onPress={handleAppleLogin} disabled={isLoading} />}
					{/* <AuthButton type={AuthBtnType.facebook} onPress={() => {}} /> */}
				</View>
			</View>

			<Link style={styles.link} href='/plants' disabled={isLoading}>
				{t('login.linkText')}
			</Link>
			<TopLeaf style={styles.topLeaf} />
			<ButtonLeaf style={styles.buttonLeaf} />
		</SafeAreaView>
	);
}
