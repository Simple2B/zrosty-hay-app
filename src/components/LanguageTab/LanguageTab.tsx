import React from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './LanguageTab.style';
import { useTranslation } from 'react-i18next';
import { UserPreferredLanguage } from '@src/api/model';

type LanguageTabProps = {
	language: UserPreferredLanguage;
	isSelected: boolean;
	onSelect: (lang: UserPreferredLanguage) => void;
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
