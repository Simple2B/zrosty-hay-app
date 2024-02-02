import { PlantDetailTab } from '@src/components/PlantDetailTab/PlantDetailTab';
import { useTranslation } from 'react-i18next';

export default function Layout() {
	const { t } = useTranslation();

	return (
		<PlantDetailTab
			screenOptions={{
				tabBarActiveTintColor: '#e91e63',
				tabBarLabelStyle: { fontSize: 12 },
				tabBarStyle: { backgroundColor: 'powderblue' },
			}}
		>
			<PlantDetailTab.Screen name='index' options={{ title: t('descriptionTab') }} />
			<PlantDetailTab.Screen name='care' options={{ title: t('careTab') }} />
			<PlantDetailTab.Screen name='recipes' options={{ title: t('recipesTab') }} />
		</PlantDetailTab>
	);
}
