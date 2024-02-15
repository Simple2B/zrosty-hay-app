import { ListRenderItem, ListRenderItemInfo } from '@shopify/flash-list';
import { PagePlant } from '@src/api/model';
import { Plant } from '@src/api/model/plant';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';
import { sizes } from '@src/styling/sizes';
import { AxiosResponse } from 'axios';
import { View } from 'react-native';

export const renderItemPlantCardPreview = ({ item }: ListRenderItemInfo<Plant>) => (
	<PlantCardPreview plantInfo={item} />
);

export const getKeyExtractor = (item: Plant) => item.uuid;

export const getNextPlantPage = (lastPage: AxiosResponse<PagePlant, any>) => {
	if (!lastPage.data.page) return;
	const nexPage = lastPage.data.page + 1;

	if (lastPage.data.pages && lastPage.data.pages < nexPage) {
		return;
	}
	return nexPage;
};
