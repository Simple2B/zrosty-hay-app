import { useStyles } from 'react-native-unistyles';
import { Text, View } from 'components/Themed';
import { styleSheet } from './Plant.style';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Plants</Text>
		</View>
	);
}
