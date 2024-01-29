import React, { FunctionComponent, SVGAttributes } from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantCardInfo.style';
import { View } from '../Themed';

type PlantCardInfoProps = {
	title: string;
	SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
};

export const PlantCardInfo = ({ title, SvgIcon }: PlantCardInfoProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<SvgIcon width={16} height={16} />
			<Text style={styles.plantDescription}>{title}</Text>
		</View>
	);
};
