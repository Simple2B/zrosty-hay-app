import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantDetailScreen } from '@src/screens/PlantDetail/PlantDetail';
import { useLocalSearchParams } from 'expo-router';

export default function Plant() {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <NotFound />;
	}

	return <PlantDetailScreen plantUuid={uuid} />;
}
