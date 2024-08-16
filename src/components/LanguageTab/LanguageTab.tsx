import React from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './LanguageTab.style';
import { useTranslation } from 'react-i18next';
import { Language } from '@src/constants/languages';

type LanguageTabProps = {
	language: Language;
	isSelected: boolean;
	onSelect: (lang: Language) => void;
};

export const LanguageTab = ({ language, isSelected, onSelect }: LanguageTabProps) => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	const handleSelected = () => {
		onSelect(language);
	};
	return (
		<Text style={[styles.tabWrapper, isSelected ? styles.selected : styles.unselected]} onPress={handleSelected}>
			{t(language)}
		</Text>
	);
};
