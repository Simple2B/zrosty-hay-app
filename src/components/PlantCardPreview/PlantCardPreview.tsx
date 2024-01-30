import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardPreview.style';
import { PlantCardInfo } from '../PlantCardInfo/PlantCardInfo';
import { Plant } from '@src/api/model/plant';
import { CardDescriptionIcons, cartDescriptionToSvg } from './PlantCardPreview.constants';
import FastImage from 'react-native-fast-image';

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
				<PlantCardInfo title={isSunLovingText} SvgIcon={cartDescriptionToSvg[CardDescriptionIcons.sun]} />
				<PlantCardInfo title={wateringText} SvgIcon={cartDescriptionToSvg[CardDescriptionIcons.rainDrop]} />
				<PlantCardInfo title={temperatureText} SvgIcon={cartDescriptionToSvg[CardDescriptionIcons.thermometer]} />
				<PlantCardInfo title={careTypeText} SvgIcon={cartDescriptionToSvg[CardDescriptionIcons.plant]} />
				<PlantCardInfo title={sizeText} SvgIcon={cartDescriptionToSvg[CardDescriptionIcons.ruler]} />
			</View>
		</TouchableOpacity>
	);
};
