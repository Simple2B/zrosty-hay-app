import { Platform } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useQueryClient } from '@tanstack/react-query';
import * as AppleAuthentication from 'expo-apple-authentication';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';
import { secureStorageKeys } from '@src/constants/secureStorageKeys';
import { queryKeys } from '@src/constants/queryKeys';

export const useLogout = () => {
	const queryClient = useQueryClient();

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
			Toast.show({
				type: 'success',
				text1: 'Login out',
				text2: 'You have successfully login out 👋',
			});
		} catch (error: any) {
			Toast.show({
				type: 'error',
				text1: 'Login out',
				text2: `Error: Failed to login out: ${JSON.stringify(error)} 👋`,
			});
		}
	};

	return logout;
};
