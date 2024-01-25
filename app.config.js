const appVersion = require('./package.json').version;
const appName = process.env.APP_ENV === 'production' ? 'ZrostyHay' : 'ZrostyHay_DEV';
const androidAppId =
	process.env.APP_ENV === 'production' ? 'com.simple2b.zrostyhayapp' : 'com.simple2b.zrostyhayapp.dev';

const iosAppId = process.env.APP_ENV === 'production' ? 'com.simple2b.zrostyhay' : 'com.simple2b.zrostyhay.dev';

module.exports = {
	expo: {
		name: appName,
		slug: 'zrosty-hay-app',
		version: appVersion,
		orientation: 'portrait',
		icon: './assets/images/icon.png',
		scheme: 'myapp',
		userInterfaceStyle: 'automatic',
		splash: {
			image: './assets/images/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
			bundleIdentifier: iosAppId,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/images/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
			package: androidAppId,
		},
		web: {
			bundler: 'metro',
			output: 'static',
			favicon: './assets/images/favicon.png',
		},
		plugins: ['expo-router'],
		experiments: {
			typedRoutes: true,
			tsconfigPaths: true,
		},
		extra: {
			router: {
				origin: false,
			},
			eas: {
				projectId: 'edbd5c2b-d843-4704-b395-d1f635746e05',
			},
			storybookEnabled: process.env.STORYBOOK_ENABLED,
		},
	},
};
