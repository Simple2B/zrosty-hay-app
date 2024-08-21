import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FormInput } from '../inputs/FormInput/FormInput';
import { useAPIUpdateUserInfo } from '@src/api/users/users';
import { AxiosError } from 'axios';
import { UPDATE_USER_INPUT_DELAY_TIME } from '@src/constants/userSettings';
import Toast from 'react-native-toast-message';
import { queryClient } from '@src/queryClient';
import { queryKeys } from '@src/constants/queryKeys';

type DisplayedNameChangeControllerProps = {
	displayedName?: string;
};

export const DisplayedNameChangeController = ({ displayedName }: DisplayedNameChangeControllerProps) => {
	const { t } = useTranslation();

	const [name, setName] = useState(displayedName || '');

	const { mutate: updateUserInfo, isPending } = useAPIUpdateUserInfo({
		mutation: {
			onMutate: async (newName) => {
				await queryClient.cancelQueries({ queryKey: [queryKeys.ME] });
				const oldUser = queryClient.getQueryData<{ data: { alias: string } } | undefined>([queryKeys.ME]);
				const prevName = oldUser?.data?.alias;
				queryClient.setQueryData([queryKeys.ME], {
					...oldUser,
					data: {
						...oldUser?.data,
						alias: newName.data.alias,
					},
				});
				return oldUser;
			},
			onError: async (error: AxiosError, context, oldUser) => {
				const prevName = oldUser?.data?.alias;
				if (prevName) {
					setName(prevName);
				}
				queryClient.setQueryData([queryKeys.ME], {
					...oldUser,
				});
				Toast.show({
					type: 'error',
					text1: 'Failed to update name',
				});
			},
			onSettled: () => {
				queryClient.invalidateQueries({ queryKey: [queryKeys.ME] });
			},
		},
	});

	const handleUpdateName = (name: string) => {
		setName(name);
		setTimeout(() => {
			updateUserInfo({ data: { alias: name } });
		}, UPDATE_USER_INPUT_DELAY_TIME);
	};
	return (
		<FormInput
			label={t('username')}
			defaultValue={name}
			placeholder={t('username')}
			onChange={handleUpdateName}
			isPending={isPending}
		/>
	);
};
