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
import { PlantDetailInfo } from '@src/components/PlantDetailInfo/PlantDetailInfo';
import { getSizeKey } from '@src/utils';
import { styleSheet } from './PlantDerail.style';

const MAX_LENGTH = 150;

export default function PlantDetailScreen() {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();
	const [maxFeaturesLenght, setMaxFeaturesLenght] = useState<number>(MAX_LENGTH);

	const { data, isLoading, isError } = useAPIGet(uuid ?? '', {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, uuid],
		},
	});

	const handlerOnBtnMore = () => {
		setMaxFeaturesLenght(maxFeaturesLenght * 2);
	};

	if (isLoading) {
		return <Spinner size={64} />;
	}

	if (isError || !data) {
		return <NotFound />;
	}

	const isSunLoving = data.data.isSunLoving;
	const sizeSubtitle = t(`plantSize.${getSizeKey(data.data.maxSize)}`);
	const featureeLenght = data.data.features.length;

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<View style={styles.description}>
				<Text style={styles.title}>{data?.data.name}</Text>
				<View style={styles.infoWrapper}>
					<Info />
					<Text style={styles.subTitile}>{t('plantInfoText')}</Text>
				</View>
				<Text style={styles.paragraph}>{data.data.generalInfo}</Text>
				<Text style={styles.paragraph}>{data.data.features.slice(0, maxFeaturesLenght)}</Text>
			</View>
			{maxFeaturesLenght < featureeLenght && (
				<Text onPress={handlerOnBtnMore} style={styles.btnMore}>
					{t('plantMoreTextBtn')}
				</Text>
			)}
			<View style={styles.info}>
				<View style={styles.infoRow}>
					<PlantDetailInfo title={t('plantDetailSizeTitle')} subTitle={sizeSubtitle} SvgIcon={SizeIcon} />
					<PlantDetailInfo
						title={t('plantDetailSunTitle')}
						subTitle={isSunLoving ? t('isSunLoving') : t('notSunLoving')}
						SvgIcon={SunIcon}
					/>
				</View>
				<View style={styles.infoRow}>
					<PlantDetailInfo
						title={t('plantDetailWateringTitle')}
						subTitle={`${data.data.waterVolume}${t('millilitre')}`}
						SvgIcon={WateringIcon}
					/>
					<PlantDetailInfo
						title={t('plantDetailHumidityTitle')}
						subTitle={`${data.data.humidityPercentage}%`}
						SvgIcon={WateringInfoIcon}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
