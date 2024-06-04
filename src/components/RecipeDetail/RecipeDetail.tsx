import { useStyles } from 'react-native-unistyles';
import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useAPIGetRecipeDetail } from '@src/api/recipes/recipes';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';
import { styleSheet } from './RecipeDetail.style';
import { TRecipeScreenProps } from '@src/types/recipe';
import { RecipeIngredient } from '../RecipeIngredient/RecipeIngredient';
import { RecipeStep } from '../RecipeStep/RecipeStep';

type Props = Omit<TRecipeScreenProps, 'plantUuid'>;

export function RecipeDetail({ recipeUuid }: Props) {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	const { data, isLoading, isError } = useAPIGetRecipeDetail(recipeUuid, {
		query: {
			queryKey: [queryKeys.GET_RECIPE_DETAIL, recipeUuid],
		},
	});

	if (isLoading || !data) {
		return <Spinner size={64} />;
	}

	if (isError) {
		return <NotFound />;
	}

	const recipeDetail = data.data;

	const cookingTime = recipeDetail.cooking_time / 60;
	const complexity = cookingTime < 60 ? t('easy') : cookingTime < 120 ? t('Normal') : t('Hard');

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>{recipeDetail.name}</Text>
				<View style={styles.detail}>
					<View style={styles.detailColumn}>
						<Text style={styles.detailColumnTitle}>{t('recipeDetailPortion')}</Text>
						<Text style={styles.detailCoulumText}>1</Text>
					</View>
					<View style={styles.detailColumn}>
						<Text style={styles.detailColumnTitle}>{t('recipeDetailCookingTime')}</Text>
						<Text style={styles.detailCoulumText}>
							{cookingTime.toFixed()} {t('minutes')}
						</Text>
					</View>
					<View style={styles.detailColumn}>
						<Text style={styles.detailColumnTitle}>{t('recipeDetailComplexity')}</Text>
						<Text style={styles.detailCoulumText}>{complexity}</Text>
					</View>
				</View>
				<Text style={styles.subTitle}>{t('ingredientTitle')}</Text>
				<View style={styles.ingredientsWrapper}>
					{recipeDetail.ingredients?.map((ingredient) => (
						<RecipeIngredient key={ingredient.uuid} ingredient={ingredient} />
					))}
				</View>
				<Text style={styles.subTitle}>{t('additionalIngredientTitle')}</Text>
				<View style={styles.additionalIngredientWrapper}>
					{recipeDetail.additionalIngredients?.map((additionalIngredient) => (
						<Text key={additionalIngredient.uuid} style={styles.additionalIngredientText}>
							{'\u2022'} {additionalIngredient.name} ({additionalIngredient.textQuantity})
						</Text>
					))}
				</View>
				<Text style={styles.subTitle}>{t('recipeTitle')}</Text>
				<View style={styles.recipeSteps}>
					{recipeDetail.steps?.map((step) => (
						<RecipeStep key={step.uuid} {...step} />
					))}
				</View>
			</View>
		</ScrollView>
	);
}
