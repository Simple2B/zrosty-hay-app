import { AxiosResponse } from 'axios';

import { ListRenderItemInfo } from '@shopify/flash-list';
import { PagePlant } from '@src/api/model';
import { Plant } from '@src/api/model/plant';
import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';

export const renderItemPlantCardPreview = ({ item }: ListRenderItemInfo<Plant>) => (
	<PlantCardPreview plantInfo={item} />
);

export const renderListEmptyComponent = () => (
	<NotFound withGoBack={false} />
)

export const getKeyExtractor = (item: Plant) => item.uuid;

export const getNextPlantPage = (lastPage: AxiosResponse<PagePlant, any>) => {
	if (!lastPage.data.page) return;
	const nexPage = lastPage.data.page + 1;

	if (lastPage.data.pages && lastPage.data.pages < nexPage) {
		return;
	}
	return nexPage;
};
