import { View, Text } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { SvgXml } from 'react-native-svg';

import { PlantingStepDay as TPlantingStepDay } from '@src/api/model';
import { sizes } from '@src/styling/sizes';
import { styleSheet } from './PlantingStepDay.style';

type Props = Omit<TPlantingStepDay, 'uuid'> & {};

const SIZE = sizes.md;

export const PlantingStepDay = ({ name, svgIcon, instruction }: Props) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<SvgXml xml={svgIcon} width={SIZE} height={SIZE} />
				<Text style={styles.title}>{name}</Text>
			</View>
			<Text style={styles.instruction}>{instruction}</Text>
		</View>
	);
};
