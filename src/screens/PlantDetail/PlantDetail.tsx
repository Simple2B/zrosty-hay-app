import { useStyles } from 'react-native-unistyles';
import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import SunIcon from '@assets/icons/plantDetail/sun.svg';
import WateringIcon from '@assets/icons/plantDetail/watering.svg';
import WateringInfoIcon from '@assets/icons/plantDetail/wateringInfo.svg';
import SizeIcon from '@assets/icons/plantDetail/size.svg';
import { useAPIGet } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';
import Info from '@assets/icons/info.svg';
import { styleSheet } from './PlantDerail.style';
import { PlantDetailInfo } from '@src/components/PlantDetailInfo/PlantDetailInfo';

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const { uuid } = useLocalSearchParams<{ uuid: string }>();
	const [showMore, setShowMore] = useState<boolean>(false);

	const { data, isLoading, isError } = useAPIGet(uuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, uuid],
		},
	});

	const handlerOnBtnMore = () => {
		setShowMore(!showMore);
	};

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
				{showMore && (
					<>
						<Text style={styles.paragraph}>{data?.data.temperatureInfo}</Text>
						<Text style={styles.paragraph}>{data?.data.wateringInfo}</Text>
					</>
				)}
			</View>
			{!showMore && (
				<Text onPress={handlerOnBtnMore} style={styles.btnMore}>
					{t('plantMoreTextBtn')}
				</Text>
			)}
			<View style={styles.info}>
				<PlantDetailInfo title='Багато сонця' subTitle='Освітлення' SvgIcon={SunIcon} />
				<PlantDetailInfo title='Полив' subTitle='300мл' SvgIcon={WateringIcon} />
				<PlantDetailInfo title='Вологість' subTitle='30%' SvgIcon={WateringInfoIcon} />
				<PlantDetailInfo title='Довжина' subTitle='Велика рослина' SvgIcon={SizeIcon} />
			</View>
		</ScrollView>
	);
}
