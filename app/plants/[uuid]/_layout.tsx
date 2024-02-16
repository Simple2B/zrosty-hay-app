import { NotFound } from '@src/components/NotFound/NotFound';
import { PlantDetailLayout } from '@src/components/PlantDetailLayout/PlantDetailLayout';
import { useLocalSearchParams } from 'expo-router';

export default function Layout() {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <NotFound />;
	}

	return <PlantDetailLayout plantUuid={uuid} />;
}
