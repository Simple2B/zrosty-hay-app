import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';

import { useStyles } from 'react-native-unistyles';
import { UserPreferredLanguage } from '@src/api/model';
import { useAPIUpdateUserInfo } from '@src/api/users/users';

import { LanguageTab } from '../LanguageTab/LanguageTab';
import { styleSheet } from './LanguageSelector.style';
import { useMe } from '@src/hooks/useMe';
import { queryClient } from '@src/queryClient';
import { queryKeys } from '@src/constants/queryKeys';
import { AxiosError } from 'axios';

export const LanguageSelector = () => {
	const { styles } = useStyles(styleSheet);
	const user = useMe();

	const { mutate: updateUserInfo } = useAPIUpdateUserInfo({
		mutation: {
			onMutate: async (newLanguage) => {
				await queryClient.cancelQueries({ queryKey: [queryKeys.ME] });

				const oldUser = queryClient.getQueryData<{ data: { language: UserPreferredLanguage } } | undefined>([
					queryKeys.ME,
				]);
				queryClient.setQueryData([queryKeys.ME], {
					...oldUser,
					data: {
						...oldUser?.data,
						language: newLanguage.data.language,
					},
				});

				return { oldUser };
			},

			onError: async (error: AxiosError, context, oldUser) => {
				if (oldUser) {
					queryClient.setQueryData([queryKeys.ME], oldUser);
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
