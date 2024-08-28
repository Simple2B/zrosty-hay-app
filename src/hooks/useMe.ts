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
		if (data?.data) {
			const user = data.data;
			i18next.changeLanguage(user.language);
		}
	}, [data]);

	if (!data?.data || isLoading || isError) {
		return;
	}

	return data.data;
};
