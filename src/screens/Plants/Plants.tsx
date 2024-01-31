import { useStyles } from 'react-native-unistyles';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, FlatList } from 'react-native';

import { styleSheet } from './Plant.style';
import { Categories } from '@src/components/Categories/Categories';
import { useState } from 'react';
import { PlantsHeader } from '@src/components/PlantsHeader/PlantsHeader';
import { useAPIGetAll } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { PlantCardPreview } from '@src/components/PlantCardPreview/PlantCardPreview';

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

	const handleSelectCategory = (uuid: string) => {
		if (categoryUuids.includes(uuid)) {
			setCategoryUuids([...categoryUuids.filter((curUuid) => curUuid !== uuid)]);
		} else {
			setCategoryUuids([...categoryUuids, uuid]);
		}
		// queryClient.invalidateQueries({ queryKey: [queryKeys.GET_PLANTS] });
	};

	const plants = data?.data.items ?? [];
	// console.log(plants);

	console.log(isLoading, categoryUuids);

	return (
		<SafeAreaView style={styles.wrapper}>
			<PlantsHeader />
			<Categories categoryUuids={categoryUuids} handleSelectCategory={handleSelectCategory} />

			<FlatList
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
				data={plants}
				renderItem={({ item }) => <PlantCardPreview key={item.uuid} plantInfo={item} />}
			/>
		</SafeAreaView>
	);
}
