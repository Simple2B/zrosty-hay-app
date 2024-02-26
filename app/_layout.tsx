import '@src/styling/unistyles';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Constants from 'expo-constants';
import axios from 'axios';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { secureStorageKeys } from '@src/constants/secureStorageKeys';
import { StackScreenName } from '@src/navigation/navigators.types';
import '@src/i18n/i18n';

import { queryClient } from '../src/queryClient';
import { useStyles } from 'react-native-unistyles';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

axios.interceptors.request.use(async (request) => {
	// Your interceptor logic here
	const token = (await SecureStore.getItemAsync(secureStorageKeys.TOKEN)) ?? '';
	const headers = request.headers;
	console.log('token', token);
	if (token && headers) {
		headers.Authorization = `Bearer ${token}`;
	}
	return {
		...request,
		headers,
	};
});

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: StackScreenName.index,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
Constants.expoConfig?.extra?.storybookEnabled?.trim() !== 'true' && SplashScreen.preventAutoHideAsync();

GoogleSignin.configure({
	webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
	iosClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS,
});

function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}
	return <RootLayoutNav />;
}

const screenOptions = { headerShown: false };

function RootLayoutNav() {
	const { theme } = useStyles();
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider value={theme}>
				<StatusBar barStyle='light-content' />
				<SafeAreaProvider>
					<Stack screenOptions={screenOptions}>
						<Stack.Screen name='index' />
						<Stack.Screen name='plants/index' />
						<Stack.Screen name='plants/[uuid]' />
					</Stack>
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig?.extra?.storybookEnabled?.trim() === 'true') {
	AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
