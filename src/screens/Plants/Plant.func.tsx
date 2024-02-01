import { ListRenderItem, ListRenderItemInfo } from '@shopify/flash-list';
import { Plant } from '@src/api/model/plant';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';
import { sizes } from '@src/styling/sizes';
import { View } from 'react-native';

export const renderItemPlantCardPreview = ({ item }: ListRenderItemInfo<Plant>) => (
	<PlantCardPreview plantInfo={item} />
);
export const renderItemSeparator = () => <View style={{ height: sizes.md }} />;

export const getKeyExtractor = (item: Plant) => item.uuid;
