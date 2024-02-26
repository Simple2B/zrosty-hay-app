import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

import { useAPIValidateGoogleToken } from '@src/api/o-auth/o-auth';
import { queryKeys } from '@src/constants/queryKeys';
import { secureStorageKeys } from '@src/constants/secureStorageKeys';
// import { useAPIValidateGoogleToken } from '@src/orval_api/o-auth/o-auth';
// import { QueryKeys } from 'constants/QueryKeys';
// import { SecureStorageKeys } from 'constants/SecureStorageKeys';
// import { reportError } from '../services/reportError';

export const useGoogleLogin = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const { mutate, isPending: validateTokenLoading } = useAPIValidateGoogleToken({
		mutation: {
			onMutate: async () => {
				queryClient.setQueryData([queryKeys.ME], undefined);
			},
			onSuccess: async ({ data }) => {
				await SecureStore.setItemAsync(secureStorageKeys.TOKEN, data.access_token);

				await queryClient.invalidateQueries({
					queryKey: [queryKeys.ME],
					refetchType: 'all',
				});

				// router.replace('/(app)/(rooms)');
			},
			onError: async (error) => {
				console.log({ error });
				// reportError('Failed to login with google', 'google_login_error', JSON.stringify(error));
				await GoogleSignin.revokeAccess();
				GoogleSignin.signOut();
			},
		},
	});

	const { mutate: googleAuthMutate, isPending: googleAuthPending } = useMutation({
		mutationFn: async () => {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();

			if (!userInfo.idToken) {
				// reportError('Id token missing', 'google_login_error', 'Id token is missing in google Auth');
			}
			return userInfo;
		},
		onSuccess: async (data) => {
			if (!data.idToken) {
				return;
			}
			mutate({ data: { id_token: data.idToken } });
		},
		onError: (error: any) => {
			console.log(error);
			// reportError('Failed to login with google', 'google_login_error', JSON.stringify(error));
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('user cancelled the login flow');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('operation (e.g. sign in) is in progress already');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log('play services not available or outdated');
			} else {
				console.log('some other error happened');
			}
		},
	});

	return {
		handleGoogleLogin: googleAuthMutate,
		loading: googleAuthPending || validateTokenLoading,
	};
};
