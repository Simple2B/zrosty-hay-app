import { useEffect, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Categories } from '@src/components/Categories/Categories';
import { PlantsHeader } from '@src/components/PlantsHeader/PlantsHeader';
import { useAPIGetAllInfinite } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { styleSheet } from './Plant.style';

import {
	renderItemPlantCardPreview,
	getKeyExtractor,
	getNextPlantPage,
	renderListEmptyComponent,
} from './Plant.callbacks';

const ITEM_SIZE = 182;
const INPUT_DELAY_TIME = 900;
const PAGINATION_SIZE = 20;

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);
	const [searchInput, setSearchInput] = useState<string>('');
	const [categoryUuids, setCategoryUuids] = useState<string[]>([]);

	const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, refetch } = useAPIGetAllInfinite(
		{
			size: PAGINATION_SIZE,
			name: searchInput,
			category_uuids: categoryUuids,
		},
		{
			query: {
				queryKey: [queryKeys.GET_PLANTS, categoryUuids],
				getNextPageParam: getNextPlantPage,
			},
			axios: {
				paramsSerializer: {
					indexes: null,
				},
			},
		},
	);
	// biome-ignore lint: we have dependency on searchInput
	useEffect(() => {
		const timer = setTimeout(() => {
			refetch();
		}, INPUT_DELAY_TIME);
		return () => clearTimeout(timer);
	}, [searchInput]);

	const handleSelectCategory = (uuid: string) => {
		if (categoryUuids.includes(uuid)) {
			setCategoryUuids([...categoryUuids.filter((curUuid) => curUuid !== uuid)]);
		} else {
			setCategoryUuids([...categoryUuids, uuid]);
		}
	};

	const plants = data?.pages.flatMap((queryData) => queryData.data.items);

	const onEndReached = () => {
		if (!hasNextPage) return;
		fetchNextPage();
	};

	const renderLoader = () => {
		return isFetchingNextPage ? (
			<View style={styles.loader}>
				<Spinner size={24} />
			</View>
		) : null;
	};

	return (
		<SafeAreaView style={styles.wrapper} edges={['bottom']}>
			<PlantsHeader value={searchInput} onChangeText={setSearchInput} />
			<Categories categoryUuids={categoryUuids} handleSelectCategory={handleSelectCategory} />
			{isLoading && <Spinner size={64} />}
			{!!plants && (
				<FlashList
					refreshing={isFetchingNextPage}
					data={plants}
					onEndReachedThreshold={0.1}
					contentContainerStyle={styles.plants}
					estimatedItemSize={ITEM_SIZE}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={renderListEmptyComponent}
					keyExtractor={getKeyExtractor}
					onEndReached={onEndReached}
					ListFooterComponent={renderLoader}
					renderItem={renderItemPlantCardPreview}
				/>
			)}
		</SafeAreaView>
	);
}
