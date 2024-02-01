import { useStyles } from 'react-native-unistyles';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Categories } from '@src/components/Categories/Categories';
import { PlantsHeader } from '@src/components/PlantsHeader/PlantsHeader';
import { useAPIGetAll, aPIGetAll, useAPIGetAllInfinite } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';
import { CellContainer, FlashList } from '@shopify/flash-list';
import { Spinner } from '@src/components/Spinner/Spinner';
import { PagePlant, Plant } from '@src/api/model';
import { styleSheet } from './Plant.style';
import { renderItemPlantCardPreview, renderItemSeparator, getKeyExtractor } from './Plant.func';

const ITEM_SIZE = 182;

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);
	const [searchInput, setSearchInput] = useState<string>('');
	const [categoryUuids, setCategoryUuids] = useState<string[]>([]);

	console.log('---------------------------------------------<');

	const { data, isLoading, fetchNextPage } = useAPIGetAllInfinite(
		{
			size: 4,
			name: '',
			category_uuids: categoryUuids,
		},
		{
			query: {
				queryKey: [queryKeys.GET_PLANTS, searchInput, categoryUuids, 1],
				// getPreviousPageParam: async ({ data }) => {
				// 	// const firstPage = res.data;
				// 	console.log('prev page');
				// 	if (!data.page) return;
				// 	return data.page - 1;
				// },
				getNextPageParam: (lastPage) => {
					// const lastPage = res.data;
					console.log('next page', lastPage.data);
					if (!lastPage.data?.page) return;
					const nexPage = lastPage.data.page + 1;
					// if (data.pages && nexPage >= data.pages) return;
					console.log('next page will be ', nexPage);
					return nexPage;
				},
			},
		},
	);

	const handleSelectCategory = (uuid: string) => {
		if (categoryUuids.includes(uuid)) {
			setCategoryUuids([...categoryUuids.filter((curUuid) => curUuid !== uuid)]);
		} else {
			setCategoryUuids([...categoryUuids, uuid]);
		}
	};

	// const plants = data?.data.items ?? [];
	console.log(data?.pages.length);
	const plants = data?.pages.flatMap((queryData) => queryData.data.items) || [];
	// console.log(plants);
	console.log(
		'reload',
		plants.map((p) => p.uuid),
	);

	// console.log(isLoading, plants.length);

	const onEndReached = () => {
		console.log('end ------>');
		// if (data?.pageParams.)

		// if (data?.pageParams)
		// if (data?.pages && data.pages.length >= 3) {
		// 	console.log(data, 'data');
		// 	return;
		// }
		fetchNextPage();
	};

	const renderLoader = () => {
		return isLoading ? <Spinner size={24} /> : null;
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<PlantsHeader />
			<Categories categoryUuids={categoryUuids} handleSelectCategory={handleSelectCategory} />
			<TouchableOpacity onPress={onEndReached}>
				<Text>Next</Text>
			</TouchableOpacity>

			{isLoading ? (
				<Spinner size={64} />
			) : (
				<FlashList
					refreshing={isLoading}
					keyExtractor={getKeyExtractor}
					// onEndReached={onEndReached}
					// onEndReachedThreshold={0.1}
					contentContainerStyle={styles.plants}
					ListFooterComponent={renderLoader}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={renderItemSeparator}
					data={plants}
					estimatedItemSize={ITEM_SIZE}
					renderItem={renderItemPlantCardPreview}
				/>
			)}
		</SafeAreaView>
	);
}
