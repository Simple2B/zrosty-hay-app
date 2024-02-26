import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCareTips.style';
import { useTranslation } from 'react-i18next';

import { sizes } from '@src/styling/sizes';
import { TPlantScreenProps } from '@src/types/plant';
import { useAPIGetPlantCareTips } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';

import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import { PlantCareTipBlock } from '../PlantCareTipBlock/PlantCareTipBlock';

import GraduationCapIcon from '@assets/icons/graduationCap.svg';
import RainDropIcon from '@assets/icons/rainDrop.svg';
import ThermometerIcon from '@assets/icons/plantCard/thermometer.svg';
import PestIcon from '@assets/icons/pest.svg';
import ShovelIcon from '@assets/icons/shovel.svg';
import PillIcon from '@assets/icons/pill.svg';

export const PlantCareTips = ({ plantUuid }: TPlantScreenProps) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	const { data, isLoading, isError } = useAPIGetPlantCareTips(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_STEP_DAY, plantUuid],
		},
	});

	if (isLoading || isError) {
		// TODO temporary bind error
		return <Spinner />;
	}

	if (isError || !data) {
		return <NotFound />;
	}

	const {
		watering,
		minTemperature,
		maxTemperature,
		pests,
		illnesses,
		temperature_info,
		wateringInfo,
		groundPh,
		groundType,
	} = data.data;

	const formattedPests = pests
		.map((pest) => {
			return pest.name;
		})
		.join(', ');

	const formattedIllnesses = illnesses
		.map((illness) => {
			return illness.name;
		})
		.join(', ');

	return (
		<View style={styles.wrapper}>
			<View style={styles.titleWrapper}>
				<GraduationCapIcon width={sizes.xl} height={sizes.xl} />
				<Text style={styles.title}>{t('careInfoHeader')}</Text>
			</View>

			<PlantCareTipBlock
				title={t('plantDetailWateringTitle')}
				subTitle={t(`watering.${watering}`)}
				SvgIcon={RainDropIcon}
				text={wateringInfo}
			/>

			<PlantCareTipBlock
				title={t('temperature')}
				subTitle={`${minTemperature}°C - ${maxTemperature}°C`}
				SvgIcon={ThermometerIcon}
				text={temperature_info}
			/>

			{groundType && (
				<PlantCareTipBlock
					title={t('ground')}
					SvgIcon={ShovelIcon}
					subTitle={groundPh !== 0 ? `${t('desirableSoilAcidity')} ${groundPh}` : undefined}
					text={groundType}
				/>
			)}

			{!!pests.length && <PlantCareTipBlock title={t('pest')} SvgIcon={PestIcon} subTitle={formattedPests} />}

			{!!illnesses.length && (
				<PlantCareTipBlock title={t('illness')} SvgIcon={PillIcon} subTitle={formattedIllnesses} />
			)}
		</View>
	);
};
