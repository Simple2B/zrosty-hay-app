import { useStyles } from 'react-native-unistyles';

import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { AuthButton } from '@src/components/buttons/AuthButton/AuthButton';
import { AuthBtnType } from '@src/components/buttons/AuthButton/AuthButton.constans';
import TopLeaf from '@assets/icons/topLeaf.svg';
import ButtonLeaf from '@assets/icons/buttonLeaf.svg';

import { styleSheet } from './Login.style';

export default function LoginScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
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
					<AuthButton type={AuthBtnType.google} onPress={() => {}} />
					<AuthButton type={AuthBtnType.apple} onPress={() => {}} />
					<AuthButton type={AuthBtnType.facebook} onPress={() => {}} />
				</View>
			</View>

			<Link style={styles.link} href='/plants'>
				{t('login.linkText')}
			</Link>
			<TopLeaf style={styles.topLeaf} />
			<ButtonLeaf style={styles.buttonLeaf} />
		</SafeAreaView>
	);
}
