import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';
import * as AppleAuthentication from 'expo-apple-authentication';
import { queryKeys } from '@src/constants/queryKeys';
import { secureStorageKeys } from '@src/constants/secureStorageKeys';
import { useAPIValidateAppleToken } from '@src/api/o-auth/o-auth';

export const useAppleLogin = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const [credential, setCredential] = useState<AppleAuthentication.AppleAuthenticationCredential | null>(null);

	const { t } = useTranslation();

	const { mutate, isPending: validateTokenLoading } = useAPIValidateAppleToken({
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
				router.replace('/plants');
				Toast.show({
					type: 'success',
					text1: 'Apple login',
					text2: t('loginSuccessMessage'),
				});
			},
			onError: async (error: any) => {
				console.log({ error });
				Toast.show({
					type: 'error',
					text1: 'Apple login',
					text2: `${t('loginErrorMessage')}
        ${JSON.stringify(error.message)} 👋`,
				});
				await AppleAuthentication.signOutAsync({
					user: credential?.user ?? '',
				});
			},
		},
	});

	const { mutate: appleAuthMutate, isPending: appleAuthPending } = useMutation({
		mutationFn: async () => {
			const credential = await AppleAuthentication.signInAsync({
				requestedScopes: [
					AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
					AppleAuthentication.AppleAuthenticationScope.EMAIL,
				],
			});
			if (!credential.authorizationCode) {
				Toast.show({
					type: 'error',
					text1: 'Apple login',
					text2: `${t('missingAuthCodeErrorMessage')} 👋`,
				});
			}
			return credential;
		},
		onSuccess: async (data) => {
			if (!data.authorizationCode) {
				return;
			}
			SecureStore.setItemAsync(secureStorageKeys.APPLE_AUTH_STATE, data.user);
			if (!data.identityToken) {
				return;
			}
			setCredential(data);
			mutate({ data: { id_token: data.identityToken } });
		},
		onError: (error) => {
			Toast.show({
				type: 'error',
				text1: 'Google login',
				text2: `${t('error')}: ${JSON.stringify(error.message)}👋`,
			});
		},
	});
	const handleAppleLogin = () => {
		appleAuthMutate();
	};
	return {
		handleAppleLogin,
		isPending: appleAuthPending || validateTokenLoading,
	};
};
