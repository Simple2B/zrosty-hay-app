import React from 'react';
import { Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardPreview.style';
import { View } from '../Themed';
import { PlantCardInfo } from '../PlantCardInfo/PlantCardInfo';
import { Plant } from '@src/api/model/plant';
import { Category, categoryToSvg } from './PlantCardPreview.constants';

type PlantCardPreviewProps = {
	plantInfo: Plant;
};

export const PlantCardPreview = ({ plantInfo }: PlantCardPreviewProps) => {
	const { styles } = useStyles(styleSheet);
	const { careType, isSunLoving, maxSize, maxTemperature, minSize, minTemperature, name, photo, uuid, watering } =
		plantInfo;

	const { t } = useTranslation();

	const isSunLovingText = isSunLoving
		? t('components.plantCardPreview.isSunLoving')
		: t('components.plantCardPreview.notSunLoving');
	const temperatureText = `${minTemperature} - ${maxTemperature} °C`;
	const careTypeText = t(`components.plantCardPreview.care.${careType}`);
	const sizeText = `${minSize} - ${maxSize} cm`;
	const wateringText = t(`components.plantCardPreview.watering.${watering}`);

	//TODO: add photo template in  case no picture
	return (
		<View style={styles.container}>
			<Image
				style={styles.plantImage}
				resizeMode='contain'
				source={{
					uri: photo?.urlPath || '',
				}}
			/>
			<View style={styles.infoBlock}>
				<Text style={styles.plantName}>{name}</Text>
				<PlantCardInfo title={isSunLovingText} SvgIcon={categoryToSvg[Category.sun]} />
				<PlantCardInfo title={wateringText} SvgIcon={categoryToSvg[Category.rainDrop]} />
				<PlantCardInfo title={temperatureText} SvgIcon={categoryToSvg[Category.thermometer]} />
				<PlantCardInfo title={careTypeText} SvgIcon={categoryToSvg[Category.plant]} />
				<PlantCardInfo title={sizeText} SvgIcon={categoryToSvg[Category.ruler]} />
			</View>
		</View>
	);
};
