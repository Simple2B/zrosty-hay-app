import { useStyles } from 'react-native-unistyles';
import { Text, View } from '@src/components/Themed';
import { styleSheet } from './Plant.style';
import { categories } from '@src/components/buttons/СategoryButton/CategoryButton.constans';
import { CategoryButton } from '@src/components/buttons/СategoryButton/CategoryButton';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<View style={styles.categories}>
				{/* {categories.map((categoryData) => (
					<CategoryButton SvgIcon={categoryData.SvgIcon} category={categoryData.category} onPress={() => {}} />
				))} */}
			</View>
		</View>
	);
}
