import { useStyles } from 'react-native-unistyles';

import { Link } from 'expo-router';

import { View, Text } from '@src/components/Themed';
import { styleSheet } from './Login.style';
import { SafeAreaView } from 'react-native';
import { AuthButton } from '@src/components/buttons/AuthButton/AuthButton';
import { AuthBtnType } from '@src/components/buttons/AuthButton/AuthButton.constans';

import TopLeaf from '@assets/icons/topLeaf.svg';
import ButtonLeaf from '@assets/icons/buttonLeaf.svg';

export default function LoginScreen() {
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.container}>
			<TopLeaf style={styles.topLeaf} />
			<ButtonLeaf style={styles.buttonLeaf} />
			<View style={styles.innerContainer}>
				<View style={styles.innerTop}>
					<Text style={styles.title}>
						Вітаємо у Зрости <Text style={styles.titleColor}>Гай!</Text>
					</Text>

					<Text style={styles.subTitle}>Твій кишеньковий довідник з догляду за рослинами</Text>
				</View>
				<View style={styles.innerButtons}>
					<AuthButton type={AuthBtnType.google} />
					<AuthButton type={AuthBtnType.apple} />
					<AuthButton type={AuthBtnType.facebook} />
				</View>
			</View>

			<Link style={styles.link} href='/plants'>
				Увійти як гість
			</Link>
		</SafeAreaView>
	);
}
