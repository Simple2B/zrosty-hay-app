import React, { FunctionComponent, SVGAttributes } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { sizes } from '@src/styling/sizes';
import { styleSheet } from './PlantDetailInfo.style';

type PlantDetailInfoProps = {
	title?: string;
	subTitle: string;
	SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
};

const SIZE = 48;

export const PlantDetailInfo = ({ title, subTitle, SvgIcon }: PlantDetailInfoProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.wrapper}>
			<SvgIcon width={SIZE} height={SIZE} />
			<View style={styles.inner}>
				{!!title && <Text style={styles.title}>{title}</Text>}
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</View>
	);
};
