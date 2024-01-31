import { useStyles } from 'react-native-unistyles';
import { View, SafeAreaView, Animated } from 'react-native';

import { styleSheet } from './Plant.style';
import { Categories } from '@src/components/Categories/Categories';
import { useState } from 'react';
import { PlantsHeader } from '@src/components/PlantsHeader/PlantsHeader';
import { useAPIGetAll, aPIGetAll } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';
import { CellContainer, FlashList } from '@shopify/flash-list';
import { Spinner } from '@src/components/Spinner/Spinner';
import { useInfiniteQuery } from 'react-query';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);
	const [categoryUuids, setCategoryUuids] = useState<string[]>([]);
	const { data, isLoading } = useAPIGetAll(
		{
			name: '',
			category_uuids: categoryUuids,
		},
		{
			query: {
				queryKey: [queryKeys.GET_PLANTS],
			},
		},
	);
	// TODO finish it
	// const { data, fetchNextPage, isLoading } = useInfiniteQuery(
	// 	[
	// 		queryKeys.GET_PLANTS,
	// 		// name: name,
	// 		// category_uuids: category_uuids,
	// 	],
	// 	async ({ pageParam = 1 }) => {
	// 		const res = await aPIGetAll();
	// 		return res.data;
	// 	},
	// 	{
	// 		getPreviousPageParam: (firstPage) => firstPage.page - 1 ?? undefined,
	// 		getNextPageParam: (lastPage) => lastPage.page + 1 ?? undefined,
	// 	},
	// );

	const handleSelectCategory = (uuid: string) => {
		if (categoryUuids.includes(uuid)) {
			setCategoryUuids([...categoryUuids.filter((curUuid) => curUuid !== uuid)]);
		} else {
			setCategoryUuids([...categoryUuids, uuid]);
		}
		// queryClient.invalidateQueries({ queryKey: [queryKeys.GET_PLANTS] });
	};

	const plants = data?.data.items ?? [];
	// const orders = data?.pages.flatMap((page) => page.items) || [];
	// console.log(plants);

	// console.log(isLoading, plants.length);

	return (
		<SafeAreaView style={styles.wrapper}>
			<PlantsHeader />
			<Categories categoryUuids={categoryUuids} handleSelectCategory={handleSelectCategory} />

			{isLoading ? (
				<Spinner size={64} />
			) : (
				<FlashList
					refreshing={isLoading}
					contentContainerStyle={styles.plants}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					data={plants}
					estimatedItemSize={plants.length}
					renderItem={({ item }) => <PlantCardPreview key={item.uuid} plantInfo={item} />}
				/>
			)}
		</SafeAreaView>
	);
}
