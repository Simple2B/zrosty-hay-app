import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SvgXml } from 'react-native-svg';

import { PlantCategory } from '@src/api/model';
import { sizes } from '@src/styling/sizes';
import { styleSheet } from './CategoryButton.style';

type CategoryButtonProps = {
	category: PlantCategory;
	onPress: (uuid: string) => void;
	isActive: boolean;
};

export const CategoryButton = ({ category, onPress, isActive }: CategoryButtonProps) => {
	const { styles } = useStyles(styleSheet);

	const handleOnPres = () => {
		onPress(category.uuid);
	};

	return (
		<TouchableOpacity style={styles.wrapper(isActive)} onPress={handleOnPres}>
			<SvgXml xml={category.svgIcon} width={sizes.lg} height={sizes.lg} />
			<Text style={styles.text}>{category.name}</Text>
		</TouchableOpacity>
	);
};
