import '@src/styling/unistyles';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme } from '@src/styling/themes';
import { StackScreenName } from '@src/navigation/navigators.types';
import '@src/i18n/i18n';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: StackScreenName.index,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
Constants.expoConfig?.extra?.storybookEnabled?.trim() !== 'true' && SplashScreen.preventAutoHideAsync();

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
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
			<Stack screenOptions={screenOptions}>
				<Stack.Screen name='index' />
				<Stack.Screen name='plants' />
			</Stack>
		</ThemeProvider>
	);
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig?.extra?.storybookEnabled?.trim() === 'true') {
	AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
