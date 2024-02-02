import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { useTranslation } from 'react-i18next';

export default function Layout() {
	const { t } = useTranslation();

	return (
		<PlantDetailTab>
			<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
			<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
			<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
		</PlantDetailTab>
	);
}
