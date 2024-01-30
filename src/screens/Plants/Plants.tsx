import { useStyles } from 'react-native-unistyles';
import { Text, View } from '@src/components/Themed';
import { styleSheet } from './Plant.style';
import { Categories } from '@src/components/Categories/Categories';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<Categories/>
		</View>
	);
}
