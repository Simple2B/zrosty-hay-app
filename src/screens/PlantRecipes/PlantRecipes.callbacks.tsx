import { ListRenderItemInfo } from '@shopify/flash-list';
import { PageRecipe, Recipe } from '@src/api/model';
import { AxiosResponse } from 'axios';

import { PlantRecipe } from '@src/components/PlantRecipe/PlantRecipe';

export const renderItemPlantCardPreview = ({ item }: ListRenderItemInfo<Recipe>) => <PlantRecipe recipe={item} />;

export const getKeyExtractor = (item: Recipe) => item.uuid;

export const getNextPlantPage = (lastPage: AxiosResponse<PageRecipe, any>) => {
	if (!lastPage.data.page) return;
	const nexPage = lastPage.data.page + 1;

	if (lastPage.data.pages && lastPage.data.pages < nexPage) {
		return;
	}
	return nexPage;
};
