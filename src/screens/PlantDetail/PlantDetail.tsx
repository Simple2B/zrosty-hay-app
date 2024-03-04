import { useStyles } from 'react-native-unistyles';
import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import SunIcon from '@assets/icons/plantDetail/sun.svg';
import WateringIcon from '@assets/icons/plantDetail/watering.svg';
import WateringInfoIcon from '@assets/icons/plantDetail/wateringInfo.svg';
import HarvestTimeIcon from '@assets/icons/plantDetail/harvestTime.svg';
import PlantingTimeIcon from '@assets/icons/plantDetail/plantingTime.svg';
import SizeIcon from '@assets/icons/plantDetail/size.svg';
import { useAPIGetPlantDetail } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '@src/components/Spinner/Spinner';
import { NotFound } from '@src/components/NotFound/NotFound';
import Info from '@assets/icons/info.svg';
import { PlantDetailInfo } from '@src/components/PlantDetailInfo/PlantDetailInfo';
import { styleSheet } from './PlantDetail.style';
import { TPlantScreenProps } from '@src/types/plant';
import { convertDays } from '@src/utils';

export function PlantDetailScreen({ plantUuid }: TPlantScreenProps) {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	const { data, isLoading, isError } = useAPIGetPlantDetail(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_DETAIL, plantUuid],
		},
	});


	if (isLoading) {
		return <Spinner size={64} />;
	}

	if (isError || !data) {
		return <NotFound />;
	}

	const isSunLoving = data.data.isSunLoving;
	const sizeSubtitle = `${data.data.minSize}${t('cm')} - ${data.data.maxSize}${t('cm')}`;
	const harvestTime = data.data.harvestTime;
	const plantingTime = data.data.plantingTime;
	const harvestTimeSubTitle = convertDays(harvestTime, t);
	const plantingTimeSubtitle = convertDays(plantingTime, t);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.wrapper}>
				<View style={styles.description}>
					<Text style={styles.title}>{data?.data.name}</Text>
					<View style={styles.infoWrapper}>
						<Info />
						<Text style={styles.subTitle}>{t('plantInfoText')}</Text>
					</View>
					<Text style={styles.paragraph}>{data.data.generalInfo}</Text>
					<Text style={styles.paragraph}>
						{data.data.features}
					</Text>
				</View>
				<View style={styles.info}>
					<View style={styles.infoRow}>
						<PlantDetailInfo title={t('plantDetailSizeTitle')} subTitle={sizeSubtitle} SvgIcon={SizeIcon} />
						<PlantDetailInfo
							title={t('plantDetailSunTitle')}
							subTitle={isSunLoving ? t('isSunLoving') : t('notSunLoving')}
							SvgIcon={SunIcon}
						/>
						{!!harvestTime && (
							<PlantDetailInfo title={t('harvestTime')} subTitle={harvestTimeSubTitle} SvgIcon={HarvestTimeIcon} />
						)}
					</View>
					<View style={styles.infoRow}>
						<PlantDetailInfo
							title={t('plantDetailWateringTitle')}
							subTitle={t(`watering.${data.data.watering}`)}
							SvgIcon={WateringIcon}
						/>
						<PlantDetailInfo
							title={t('plantDetailHumidityTitle')}
							subTitle={`${data.data.humidityPercentage}%`}
							SvgIcon={WateringInfoIcon}
						/>
						{!!plantingTime && (
							<PlantDetailInfo title={t('plantingTime')} subTitle={plantingTimeSubtitle} SvgIcon={PlantingTimeIcon} />
						)}
					</View>
				</View>
			</View>

		</ScrollView>
	);
}
