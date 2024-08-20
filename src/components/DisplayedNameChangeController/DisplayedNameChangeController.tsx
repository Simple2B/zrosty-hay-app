import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FormInput } from '../inputs/FormInput/FormInput';
import { useAPIUpdateUserInfo } from '@src/api/users/users';
import { AxiosError } from 'axios';
import { UPDATE_USER_INPUT_DELAY_TIME } from '@src/constants/userSettings';
import Toast from 'react-native-toast-message';

type DisplayedNameChangeControllerProps = {
	displayedName?: string;
};

export const DisplayedNameChangeController = ({ displayedName }: DisplayedNameChangeControllerProps) => {
	const { t } = useTranslation();

	const [name, setName] = useState(displayedName || '');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (name) {
				updateUserInfo({ data: { alias: name } });
			}
		}, UPDATE_USER_INPUT_DELAY_TIME);

		return () => clearTimeout(timer);
	}, [name]);

	const { mutate: updateUserInfo } = useAPIUpdateUserInfo<AxiosError, unknown>({
		mutation: {
			onSuccess: (data) => {
				setName(data.data.alias);
			},
			onError: (error) => {
				Toast.show({ type: 'error', text1: 'Failed to save name' });
			},
		},
	});

	return <FormInput label={t('username')} defaultValue={name} placeholder={t('username')} onChange={setName} />;
};
