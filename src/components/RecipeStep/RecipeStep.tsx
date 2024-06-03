import { useStyles } from 'react-native-unistyles';
import { Text, View } from 'react-native';
import { styleSheet } from './RecipeStep.style';
import { RecipeStep as TRecipeStep } from '@src/api/model';

export function RecipeStep({ stepNumber, instruction }: TRecipeStep) {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.stepNumber}>{stepNumber}</Text>
			<Text style={styles.text}>{instruction}</Text>
		</View>
	);
}
