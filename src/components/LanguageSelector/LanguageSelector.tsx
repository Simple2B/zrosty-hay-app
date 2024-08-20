import React, { useState } from 'react';
import { View } from 'react-native';
import { LanguageTab } from '../LanguageTab/LanguageTab';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './LanguageSelector.style';
import { UserPreferredLanguage } from '@src/api/model';
import { useAPIUpdateUserInfo } from '@src/api/users/users';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';

type Props = {
	language: UserPreferredLanguage;
};

export const LanguageSelector = ({ language }: Props) => {
	const { styles } = useStyles(styleSheet);
	const [selectedLanguage, setSelectedLanguage] = useState<UserPreferredLanguage>(language);

	const { mutate: updateUserInfo } = useAPIUpdateUserInfo<AxiosError, unknown>({
		mutation: {
			onSuccess: (data) => {
				setSelectedLanguage(data.data.language);
			},
			onError: (error) => {
				Toast.show({ type: 'error', text1: 'Failed to save language' });
				console.error('Error updating language:', error);
			},
		},
	});

	const handleUpdateLanguage = (language: UserPreferredLanguage) => {
		updateUserInfo({ data: { language: language } });
	};

	return (
		<View style={styles.selectorWrapper}>
			{Object.values(UserPreferredLanguage).map((lang) => (
				<LanguageTab
					key={lang}
					language={lang}
					isSelected={selectedLanguage === lang}
					onSelect={handleUpdateLanguage}
				/>
			))}
		</View>
	);
};
