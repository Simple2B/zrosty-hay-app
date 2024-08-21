import React from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useLogout } from '@src/hooks/useLogout';
import { useMe } from '@src/hooks/useMe';

import { sizes } from '@src/styling/sizes';
import BackIcon from '@assets/icons/leftIconBlack.svg';
import LogoutIcon from '@assets/icons/logout.svg';
import RubbishBin from '@assets/icons/rubbishBin.svg';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { UserSettingsPhoto } from '../UserSettingsPhoto/UserSettingsPhoto';
import { SystemButton } from '../buttons/SystemButton/SystemButton';
import { styleSheet } from './UserSettings.style';

import { DisplayedNameChangeController } from '../DisplayedNameChangeController/DisplayedNameChangeController';

export const UserSettings = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const router = useRouter();

	const user = useMe();
	const loginout = useLogout();

	const createLoginOutAlert = () =>
		Alert.alert(t('loginOut'), t('loginOutMessage'), [
			{
				text: t('loginOutOk'),
				onPress: async () => {
					if (!user) return;
					await loginout();
					router.push('/');
				},
			},
			{
				text: t('loginOutCancel'),
			},
		]);

	if (!user) {
		router.back();
		return null;
	}

	const handleDeleteAccount = () => {
		router.push('/');
	};

	return (
		<SafeAreaView style={styles.filler}>
			<StatusBar barStyle='dark-content' />

			<ScrollView contentContainerStyle={styles.settingsWrapper} style={styles.filler}>
				<Text style={styles.settingsTitle}>{t('settings')}</Text>
				<UserSettingsPhoto photoUrl={user.avatar_url} />

				<DisplayedNameChangeController displayedName={user.alias} />

				<View style={styles.formSection}>
					<Text style={styles.formFieldTitle}>{t('selectLanguage')}:</Text>
					<LanguageSelector />
				</View>

				<View style={styles.filler} />

				<View style={styles.buttonWrapper}>
					<SystemButton onPress={handleDeleteAccount} Icon={<RubbishBin />} label={t('deleteAccount')} />
					<SystemButton onPress={createLoginOutAlert} Icon={<LogoutIcon />} label={t('loginOut')} />
				</View>
			</ScrollView>
			<Pressable onPress={router.back} style={styles.backButtonBackground}>
				<BackIcon width={sizes.xl} height={sizes.xl} />
			</Pressable>
		</SafeAreaView>
	);
};
