import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SvgProps } from 'react-native-svg';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './CategoryButton.style';
import { Categorys } from './CategoryButton.constans';
import { sizes } from '@src/styling/sizes';

type CategoryButtonProps = {
	category: Categorys;
	SvgIcon: React.FC<SvgProps>;
	onPress: (category: Categorys) => void;
};

export const CategoryButton = ({ category, SvgIcon, onPress }: CategoryButtonProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const handleOnPres = () => {
		setIsActive(!isActive);
		onPress(category);
	};

	return (
		<TouchableOpacity style={styles.wrapper(isActive)} onPress={handleOnPres}>
			<SvgIcon width={sizes.md} height={sizes.md} />
			<Text style={styles.text}>{t(`components.categoryButton.${category}`)}</Text>
		</TouchableOpacity>
	);
};
