import { queryKeys } from '@src/constants/queryKeys';
import { useAPIGetCurrentUserProfile } from '@src/api/users/users';

export const useMe = () => {
	const { data, isLoading, isError } = useAPIGetCurrentUserProfile({
		query: {
			queryKey: [queryKeys.ME],
			retry: false,
		},
	});
	if (!data?.data || isLoading || isError) {
		return;
	}
	return data.data;
};
