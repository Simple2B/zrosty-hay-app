import { useEffect } from 'react';
import { useStyles } from 'react-native-unistyles';
import { router, SplashScreen } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { SafeAreaView, View, Text, StatusBar, Platform } from 'react-native';

import TopLeaf from '@assets/icons/topLeaf.svg';
import ButtonLeaf from '@assets/icons/buttonLeaf.svg';
import { useAppStore } from '@src/storage/storage';
import { useGoogleLogin } from '@src/hooks/useGoogleLogin';
import { useAppleLogin } from '@src/hooks/useAppleLogin';
import { AuthButton } from '@src/components/buttons/AuthButton/AuthButton';
import { AuthBtnType } from '@src/components/buttons/AuthButton/AuthButton.constans';
import { styleSheet } from './Login.style';

const isIos = Platform.OS === 'ios';
export default function LoginScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const { handleGoogleLogin, loading: googleAuthLoading } = useGoogleLogin();
	const { handleAppleLogin, isPending: appleAuthLoading } = useAppleLogin();
	const isLoading = googleAuthLoading || appleAuthLoading;
	const { setGuest } = useAppStore();

	useEffect(() => {
		SplashScreen.hideAsync();
	}, []);

	const handleLoginAsGuestPress = async () => {
		try {
			setGuest(true);
			router.push('/plants');
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: t('loginErrorMessage'),
			});
		}
	};

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
					{/* <AuthButton type={AuthBtnType.facebook} onPress={() => {}} />  */}
				</View>
			</View>

			<Text style={styles.link} onPress={handleLoginAsGuestPress}>
				{t('login.linkText')}
			</Text>

			<TopLeaf style={styles.topLeaf} />
			<ButtonLeaf style={styles.buttonLeaf} />
		</SafeAreaView>
	);
}
