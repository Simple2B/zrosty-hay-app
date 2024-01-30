import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardPreview.style';
import { PlantCardInfo } from '../PlantCardInfo/PlantCardInfo';
import { Plant } from '@src/api/model/plant';
import FastImage from 'react-native-fast-image';

import SunIcon from '@assets/icons/plantCard/sun.svg';
import RainDropIcon from '@assets/icons/plantCard/rainDrop.svg';
import RulerIcon from '@assets/icons/plantCard/ruler.svg';
import PlantIcon from '@assets/icons/plantCard/plant.svg';
import ThermometerIcon from '@assets/icons/plantCard/thermometer.svg';

type PlantCardPreviewProps = {
	plantInfo: Plant;
};

export const PlantCardPreview = ({ plantInfo }: PlantCardPreviewProps) => {
	const { styles } = useStyles(styleSheet);
	const { careType, isSunLoving, maxSize, maxTemperature, minSize, minTemperature, name, photo, uuid, watering } =
		plantInfo;

	const { t } = useTranslation();

	const isSunLovingText = isSunLoving ? t('components.isSunLoving') : t('components.notSunLoving');
	const temperatureText = `${minTemperature} - ${maxTemperature} °C`;
	const careTypeText = t(`components.care.${careType}`);
	const sizeText = `${minSize} - ${maxSize} cm`;
	const wateringText = t(`components.watering.${watering}`);

	//TODO: add photo template in  case no picture
	return (
		<TouchableOpacity style={styles.cardWrapper}>
			<FastImage
				style={styles.plantImage}
				source={{
					uri: photo?.urlPath || '',

					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.cover}
			/>

			<View style={styles.infoBlock}>
				<Text style={styles.plantName}>{name}</Text>
				<PlantCardInfo title={isSunLovingText} SvgIcon={SunIcon} />
				<PlantCardInfo title={wateringText} SvgIcon={RainDropIcon} />
				<PlantCardInfo title={temperatureText} SvgIcon={ThermometerIcon} />
				<PlantCardInfo title={careTypeText} SvgIcon={PlantIcon} />
				<PlantCardInfo title={sizeText} SvgIcon={RulerIcon} />
			</View>
		</TouchableOpacity>
	);
};
