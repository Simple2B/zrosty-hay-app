import { useAPIGet } from '@src/api/plants/plants';
import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { PlantPhotoSwiper } from '@src/components/PlantPhotoSwiper/PlantPhotoSwiper';
import { Spinner } from '@src/components/Spinner/Spinner';
import { queryKeys } from '@src/constants/queryKeys';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function Layout() {
	const { t } = useTranslation();

	const { uuid } = useLocalSearchParams<{ uuid: string }>();

	const { data, isLoading, isError } = useAPIGet(uuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, uuid],
		},
	});

	if (isLoading) {
		return <Spinner size={32} />;
	}

	if (isError) {
		return <NotFound />;
	}

	console.log(data?.data.photos, 'uuid');
	return (
		<View style={{ flex: 1, paddingTop: 20 }}>
			{data?.data && <PlantPhotoSwiper plantPhotos={data?.data.photos} />}
			<PlantDetailTab>
				<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
				<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
				<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
			</PlantDetailTab>
		</View>
	);
}
