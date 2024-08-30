import { Platform } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useQueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AppleAuthentication from 'expo-apple-authentication';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import * as SecureStore from 'expo-secure-store';
import { secureStorageKeys } from '@src/constants/secureStorageKeys';
import { queryKeys } from '@src/constants/queryKeys';
import { LOGGED_AS_GUEST } from '@src/constants/storage';
import { useAppStore } from '@src/storage/storage';

export const useLogout = () => {
	const queryClient = useQueryClient();
	const { t } = useTranslation();
	const { setGuest } = useAppStore();

	const logout = async () => {
		try {
			if (await GoogleSignin.isSignedIn()) {
				await GoogleSignin.revokeAccess();
				await GoogleSignin.signOut();
			}
			const appleCredentialState = await SecureStore.getItemAsync(secureStorageKeys.APPLE_AUTH_STATE);
			if (
				(Platform.OS === 'ios' &&
					!!appleCredentialState &&
					(await AppleAuthentication.getCredentialStateAsync(appleCredentialState))) ===
				AppleAuthentication.AppleAuthenticationCredentialState.AUTHORIZED
			) {
				await AppleAuthentication.signOutAsync({ user: appleCredentialState ?? '' });
				await SecureStore.deleteItemAsync(secureStorageKeys.APPLE_AUTH_STATE);
			}

			await SecureStore.deleteItemAsync(secureStorageKeys.TOKEN);

			await queryClient.invalidateQueries({
				queryKey: [queryKeys.ME],
				refetchType: 'all',
			});

			setGuest(false);

			Toast.show({
				type: 'success',
				text1: t('loginOut'),
				text2: t('logoutSuccessMessage'),
			});
		} catch (error: any) {
			Toast.show({
				type: 'error',
				text1: `${t('loginOut')} 👋`,
				text2: `${t('logoutErrorMessage')}: ${JSON.stringify(error.message)} 👋`,
			});
		}
	};

	return logout;
};
