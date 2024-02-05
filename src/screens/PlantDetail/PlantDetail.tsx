import { useStyles } from 'react-native-unistyles';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

import { useAPIGet } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';
import Info from '@assets/icons/info.svg';
import { styleSheet } from './PlantDerail.style';
import { useTranslation } from 'react-i18next';

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const { uuid } = useLocalSearchParams<{ uuid: string }>();

	const { data, isLoading, isError } = useAPIGet(uuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, uuid],
		},
	});

	if (isLoading) {
		return <Spinner size={64} />;
	}

	if (isError) {
		return <NotFound />;
	}

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<View style={styles.description}>
				<Text style={styles.title}>{data?.data.name}</Text>
				<View style={styles.infoWrapper}>
					<Info />
					<Text style={styles.subTitile}>{t('plantInfoText')}</Text>
				</View>
				<Text style={styles.paragraph}>{data?.data.generalInfo}</Text>
				<Text style={styles.paragraph}>{data?.data.features}</Text>
			</View>
		</ScrollView>
	);
}
