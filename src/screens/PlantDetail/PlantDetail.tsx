import { useStyles } from 'react-native-unistyles';
import { ScrollView, Text, View } from 'react-native';
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
import { TPlantScreenProps } from '@src/types/plant';

const LINE_NUMBER = 4;

export function PlantDetailScreen({ plantUuid }: TPlantScreenProps) {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();
	const [featuresLineNumber, setFeaturesLineNumber] = useState<number>(LINE_NUMBER);

	const { data, isLoading, isError } = useAPIGet(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, plantUuid],
		},
	});

	const handlerOnBtnMore = () => {
		setFeaturesLineNumber(featuresLineNumber * 2);
	};

	if (isLoading) {
		return <Spinner size={64} />;
	}

	if (isError || !data) {
		return <NotFound />;
	}

	const isSunLoving = data.data.isSunLoving;
	const sizeSubtitle = t(`plantSize.${getSizeKey(data.data.maxSize)}`);
	const featureWordsLenght = data.data.features.split(' ').length;
	const lineCount = featureWordsLenght > 0 ? featureWordsLenght / 10 : 0;

	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<View style={styles.description}>
				<Text style={styles.title}>{data?.data.name}</Text>
				<View style={styles.infoWrapper}>
					<Info />
					<Text style={styles.subTitile}>{t('plantInfoText')}</Text>
				</View>
				<Text style={styles.paragraph}>{data.data.generalInfo}</Text>
				<Text numberOfLines={featuresLineNumber} style={styles.paragraph}>
					{data.data.features}
				</Text>
			</View>
			{featuresLineNumber < lineCount && (
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
