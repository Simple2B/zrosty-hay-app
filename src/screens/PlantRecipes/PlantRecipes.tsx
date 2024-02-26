import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { FlashList } from '@shopify/flash-list';

import { queryKeys } from '@src/constants/queryKeys';
import { useAPIGetPlantRecipesInfinite } from '@src/api/plants/plants';
import { Spinner } from '@src/components/Spinner/Spinner';
import { styleSheet } from './PlantRecipes.style';
import { getKeyExtractor, getNextPlantPage, renderItemPlantCardPreview } from './PlantRecipes.callbacks';
import { TPlantScreenProps } from '@src/types/plant';
import { NotFound } from '@src/components/NotFound/NotFound';

const ITEM_SIZE = 177;
const PAGINATION_SIZE = 4;

export const PlantRecipesScreen = ({ plantUuid }: TPlantScreenProps) => {
	const { styles } = useStyles(styleSheet);

	const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useAPIGetPlantRecipesInfinite(
		plantUuid,
		{
			size: PAGINATION_SIZE,
		},
		{
			query: {
				queryKey: [queryKeys.GET_PLANT_RECIPES, plantUuid],
				getNextPageParam: getNextPlantPage,
			},
		},
	);

	const recipes = data?.pages.flatMap((queryData) => queryData.data.items);

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
		<View style={styles.wrapper}>
			{isLoading && <Spinner size={64} />}
			{recipes ? (
				<FlashList
					refreshing={true}
					data={recipes}
					onEndReachedThreshold={0.1}
					contentContainerStyle={styles.recipes}
					showsVerticalScrollIndicator={false}
					estimatedItemSize={ITEM_SIZE}
					keyExtractor={getKeyExtractor}
					onEndReached={onEndReached}
					ListFooterComponent={renderLoader}
					renderItem={renderItemPlantCardPreview}
				/>
			) : (
				<NotFound />
			)}
		</View>
	);
};
