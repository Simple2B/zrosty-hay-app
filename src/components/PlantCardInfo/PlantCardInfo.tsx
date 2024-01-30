import React, { FunctionComponent, SVGAttributes } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardInfo.style';
import { sizes } from '@src/styling/sizes';

type PlantCardInfoProps = {
	title: string;
	SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
};

export const PlantCardInfo = ({ title, SvgIcon }: PlantCardInfoProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<SvgIcon width={sizes.lg} height={sizes.lg} />
			<Text style={styles.plantDescription}>{title}</Text>
		</View>
	);
};
