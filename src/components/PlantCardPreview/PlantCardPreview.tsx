import React from 'react';
import { Text, Image } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardPreview.style';
import { View } from '../Themed';
import { PlantCardInfo } from '../PlantCardInfo/PlantCardInfo';
import { CARE_TYPES, WATERING_TYPES } from './PlantCardPreview.constants';

type PlantCardPreviewProps = {
	name: string;
	isSunLoving: boolean;
	minSize: number;
	maxSize: number;
	photo: string;
	minTemperature: number;
	maxTemperature: number;
	careType: 'easy' | 'normal' | 'hard';
	watering: 'easy' | 'normal' | 'hard';
};

export const PlantCardPreview = ({
	name,
	isSunLoving,
	minSize,
	maxSize,
	photo,
	minTemperature,
	maxTemperature,
	careType,
	watering,
}: PlantCardPreviewProps) => {
	const { styles } = useStyles(styleSheet);

	const isSunLovingText = isSunLoving ? 'Багато сонця' : 'Мало сонця';
	const temperatureText = `${minTemperature} - ${maxTemperature} °C`;
	const careTypeText = `${CARE_TYPES[careType]} догляд`;
	const sizeText = `${minSize} - ${maxSize} cm`;
	const wateringText = `${WATERING_TYPES[watering]} полив`;

	//TODO: add photo template in  case no picture
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: 142,
					height: 170,
					borderBottomLeftRadius: 32,
					borderTopLeftRadius: 32,
					objectFit: 'cover',
				}}
				resizeMode='contain'
				source={{
					uri: photo,
				}}
			/>
			<View style={styles.infoBlock}>
				<Text style={styles.plantName}>{name}</Text>
				<PlantCardInfo title={isSunLovingText} icon={'sun'} />
				<PlantCardInfo title={wateringText} icon={'rainDrop'} />
				<PlantCardInfo title={temperatureText} icon={'thermometer'} />
				<PlantCardInfo title={careTypeText} icon={'plant'} />
				<PlantCardInfo title={sizeText} icon={'ruler'} />
			</View>
		</View>
	);
};