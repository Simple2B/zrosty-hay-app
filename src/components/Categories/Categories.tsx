import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native';

import { queryKeys } from '@src/constants/queryKeys';
import { useAPIGetCategories } from '@src/api/plants/plants';
import { styleSheet } from './Categories.style';
import { CategoryButton } from '../buttons/СategoryButton/CategoryButton';

type CategoriesProps = {
	categoryUuids: string[];
	handleSelectCategory: (uuid: string) => void;
};

export const Categories = ({ categoryUuids, handleSelectCategory }: CategoriesProps) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const { data } = useAPIGetCategories({
		query: {
			queryKey: [queryKeys.GET_PLANT_CATEGORIES],
		},
	});

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>{t('components.categories')}</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
				{!!data?.data &&
					data?.data.map((category) => (
						<CategoryButton
							key={category.uuid}
							category={category}
							onPress={handleSelectCategory}
							isActive={categoryUuids.includes(category.uuid)}
						/>
					))}
			</ScrollView>
		</View>
	);
};
