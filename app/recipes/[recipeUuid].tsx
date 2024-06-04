import { useLocalSearchParams } from 'expo-router';

import { NotFound } from '@src/components/NotFound/NotFound';
import { RecipeDetailScreen } from '@src/screens/RecipeDetailScreen/RecipeDetailScreen';

export default function Recipe() {
	const { recipeUuid } = useLocalSearchParams<{ recipeUuid?: string; }>();

	if (!recipeUuid) {
		return <NotFound />;
	}

	return <RecipeDetailScreen recipeUuid={recipeUuid} />;
}
