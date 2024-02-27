import { Platform } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useQueryClient } from '@tanstack/react-query';
import * as AppleAuthentication from 'expo-apple-authentication';
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
		} catch (error: any) {
			// TODO errors
		}
	};

	return logout;
};
