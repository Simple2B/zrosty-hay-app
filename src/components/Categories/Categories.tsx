import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import { queryKeys } from '@src/constants/queryKeys';
import { useAPIGetCategories } from '@src/api/plants/plants';
import { styleSheet } from './Categories.style';
import { View, Text } from '../Themed';
import { CategoryButton } from '../buttons/СategoryButton/CategoryButton';

type CategoriesProps = {
	categoryUuids: string[];
	setCategoryUuid: (uuid: string) => void;
};

export const Categories = ({ categoryUuids, setCategoryUuid }: CategoriesProps) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const { data } = useAPIGetCategories({
		query: {
			queryKey: [queryKeys.GET_PLANT_CATEGORIES],
		},
	});
	const categories = data?.data ?? [];

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>{t('components.categories')}</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
				{categories.map((category) => (
					<CategoryButton
						key={category.uuid}
						category={category}
						onPress={setCategoryUuid}
						isActive={categoryUuids.includes(category.uuid)}
					/>
				))}
			</ScrollView>
		</View>
	);
};
