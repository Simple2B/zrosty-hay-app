import { useStyles } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styleSheet } from './RecipeDetailScreen.style';
import { TRecipeScreenProps } from '@src/types/recipe';
import { RecipePhotoSwiper } from '@src/components/RecipePhotoSwiper/RecipePhotoSwiper';
import { RecipeDetail } from '@src/components/RecipeDetail/RecipeDetail';

export function RecipeDetailScreen({ recipeUuid }: TRecipeScreenProps) {
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.wrapper} edges={['bottom']}>
			<RecipePhotoSwiper recipeUuid={recipeUuid} />
			<RecipeDetail recipeUuid={recipeUuid} />
		</SafeAreaView>
	);
}
