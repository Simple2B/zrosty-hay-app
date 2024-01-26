import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';

export default function Login() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>main</Text>
			<Link href='/plants'>Увійти як гість</Link>
		</View>
	);
}

const styleSheet = createStyleSheet((theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: theme.size.xl,
		fontWeight: theme.fontWeight.bold,
	},
}));
