import React from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardInfo.style';
import { View } from '../Themed';
import { ICON_MAPPER } from '@src/icons/iconMap';

type PlantCardInfoProps = {
	title: string;
	icon: 'sun' | 'plant' | 'ruler' | 'rainDrop' | 'thermometer';
};

export const PlantCardInfo = ({ title, icon }: PlantCardInfoProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			{ICON_MAPPER[icon]}
			<Text style={styles.plantDesription}>{title}</Text>
		</View>
	);
};
