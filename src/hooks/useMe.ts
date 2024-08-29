import i18next from 'i18next';
import { useEffect } from 'react';
import { queryKeys } from '@src/constants/queryKeys';
import { useAPIGetCurrentUserProfile } from '@src/api/users/users';

export const useMe = () => {
	const { data, isLoading, isError } = useAPIGetCurrentUserProfile({
		query: {
			queryKey: [queryKeys.ME],
			retry: false,
		},
	});

	useEffect(() => {
		i18next.changeLanguage(data?.data.language);
	}, [data?.data.language]);

	if (!data?.data || isLoading || isError) {
		return;
	}

	return data.data;
};
