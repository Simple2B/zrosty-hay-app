import { useStyles } from 'react-native-unistyles';

import { Link } from 'expo-router';

import { View, Text } from 'components/Themed';
import { styleSheet } from './Index.style';

export default function IndexScreen() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>main</Text>
			<Link href='/plants'>Увійти як гість</Link>
		</View>
	);
}
