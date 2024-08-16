import React, { useState } from 'react';
import { View } from 'react-native';
import { LanguageTab } from '../LanguageTab/LanguageTab';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './LanguageSelector.style';
import { Language } from '@src/constants/languages';

type Props = {
	language: Language;
};

export const LanguageSelector = ({ language }: Props) => {
	const { styles } = useStyles(styleSheet);
	const [selectedLanguage, setSelectedLanguage] = useState<Language>(language);

	const handleSelectLanguage = (newLanguage: Language) => {
		setSelectedLanguage(newLanguage);
	};

	return (
		<View style={styles.selectorWrapper}>
			{Object.values(Language).map((lang) => (
				<LanguageTab
					key={lang}
					language={lang}
					isSelected={selectedLanguage === lang}
					onSelect={handleSelectLanguage}
				/>
			))}
		</View>
	);
};
