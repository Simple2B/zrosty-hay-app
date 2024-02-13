import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { useStyles } from 'react-native-unistyles';
import { SvgXml } from 'react-native-svg';

import { sizes } from '@src/styling/sizes';
import { PlantingStepType as TPlantingStepType } from '@src/api/model';
import { styleSheet } from './PlantingStepType.style';

type Props = TPlantingStepType & {};

const SIZE = sizes.xxl + sizes.sm;

export const PlantingStepType = memo(({ name, svgIcon }: Props) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<SvgXml xml={svgIcon} width={SIZE} height={SIZE} />
			<Text style={styles.name}>{name}</Text>
		</View>
	);
});
