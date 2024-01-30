import React, { SVGAttributes, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './CategoryButton.style';
import { sizes } from '@src/styling/sizes';
import { PlantCategory } from '@src/api/model';

type CategoryButtonProps = {
	category: PlantCategory;
	onPress: (uuid: string) => void;
	isActive: boolean;
};

export const CategoryButton = ({ category, onPress, isActive }: CategoryButtonProps) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const handleOnPres = () => {
		onPress(category.uuid);
	};

	return (
		<TouchableOpacity style={styles.wrapper(isActive)} onPress={handleOnPres}>
			{/* <category.svgIcon width={sizes.md} height={sizes.md} /> */}

			<Text style={styles.text}>{t(`components.categoryButton.${category.name}`)}</Text>
		</TouchableOpacity>
	);
};
