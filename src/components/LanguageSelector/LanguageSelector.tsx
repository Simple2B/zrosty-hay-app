import React, { useState } from 'react';
import { View } from 'react-native';
import { LanguageTab } from '../LanguageTab/LanguageTab';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './LanguageSelector.style';
import { UserPreferredLanguage } from '@src/api/model';

type Props = {
	language: UserPreferredLanguage;
};

export const LanguageSelector = ({ language }: Props) => {
	const { styles } = useStyles(styleSheet);
	const [selectedLanguage, setSelectedLanguage] = useState<UserPreferredLanguage>(language);

	return (
		<View style={styles.selectorWrapper}>
			{Object.values(UserPreferredLanguage).map((lang) => (
				<LanguageTab key={lang} language={lang} isSelected={selectedLanguage === lang} onSelect={setSelectedLanguage} />
			))}
		</View>
	);
};
