import { useStyles } from 'react-native-unistyles';
import { Text, View } from 'react-native';

import { styleSheet } from './RecipeIngredient.style';
import { RecipeIngredient as TRecipeIngredient } from '@src/api/model';
import FastImage from 'react-native-fast-image';

type Props = {
	ingredient: TRecipeIngredient;
};

export function RecipeIngredient({ ingredient }: Props) {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			{ingredient.photo && (
				<View style={styles.photoWrapper}>
					<FastImage
						style={styles.photo}
						source={{
							uri: ingredient.photo.urlPath,
							priority: FastImage.priority.normal,
						}}
						resizeMode={FastImage.resizeMode.contain}
					/>
				</View>
			)}
			<View style={styles.textWrapper}>
				<Text style={styles.name}>{ingredient.name}</Text>
				<Text style={styles.quantityText}>
					{ingredient.quantity} {ingredient.quantityType}
				</Text>
			</View>
		</View>
	);
}
