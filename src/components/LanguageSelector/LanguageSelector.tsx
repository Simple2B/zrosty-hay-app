import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import { AxiosError } from 'axios';
import i18next from 'i18next';

import { useStyles } from 'react-native-unistyles';
import { User, UserPreferredLanguage } from '@src/api/model';
import { useAPIUpdateUserInfo } from '@src/api/users/users';
import { useMe } from '@src/hooks/useMe';
import { queryClient } from '@src/queryClient';
import { queryKeys } from '@src/constants/queryKeys';

import { LanguageTab } from '../LanguageTab/LanguageTab';
import { styleSheet } from './LanguageSelector.style';

export const LanguageSelector = () => {
	const { styles } = useStyles(styleSheet);
	const user = useMe();

	const { mutate: updateUserInfo } = useAPIUpdateUserInfo({
		mutation: {
			onMutate: async (newLanguage) => {
				await queryClient.cancelQueries({ queryKey: [queryKeys.ME] });

				const oldUser = queryClient.getQueryData<{ data: User } | undefined>([queryKeys.ME]);
				queryClient.setQueryData([queryKeys.ME], {
					...oldUser,
					data: {
						...oldUser?.data,
						language: newLanguage.data.language,
					},
				});

				if (newLanguage.data.language) {
					i18next.changeLanguage(newLanguage.data.language);
				}
				return oldUser;
			},

			onError: async (error: AxiosError, context, oldUser) => {
				if (oldUser) {
					queryClient.setQueryData([queryKeys.ME], {
						...oldUser,
					});
					i18next.changeLanguage(oldUser.data.language);
				}
				Toast.show({
					type: 'error',
					text1: 'Failed to update language',
				});
			},
			onSettled: () => {
				queryClient.invalidateQueries({ queryKey: [queryKeys.ME] });
			},
		},
	});

	const handleUpdateLanguage = (language: UserPreferredLanguage) => {
		updateUserInfo({ data: { language: language } });
	};

	return (
		!!user && (
			<View style={styles.selectorWrapper}>
				{Object.values(UserPreferredLanguage).map((lang) => (
					<LanguageTab key={lang} language={lang} isSelected={user.language === lang} onSelect={handleUpdateLanguage} />
				))}
			</View>
		)
	);
};
