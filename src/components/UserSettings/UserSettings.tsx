import React from 'react';
import { Alert, Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useLogout } from '@src/hooks/useLogout';
import { useMe } from '@src/hooks/useMe';
import { useAPIDeleteUser } from '@src/api/users/users';
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

	const { mutate: deleteAccount } = useAPIDeleteUser({
		mutation: {
			onError: async () => {
				Toast.show({
					type: 'error',
					text1: 'Failed to delete account',
				});
			},
		},
	});

	const statusBarHeight = useSafeAreaInsets().top;

	const createLoginOutAlert = () =>
		Alert.alert(t('loginOut'), t('loginOutMessage'), [
			{
				text: t('ok'),
				onPress: async () => {
					if (!user) return;
					await loginout();
				},
			},
			{
				text: t('cancel'),
			},
		]);

	const createDeleteAccountAlert = () =>
		Alert.alert(t('deleteAccount'), t('deleteAccountMessage'), [
			{
				text: t('ok'),
				onPress: async () => {
					if (!user) return;
					deleteAccount();
					await loginout();
				},
			},
			{
				text: t('cancel'),
			},
		]);

	if (!user) {
		router.back();
	}

	return (
		!!user && (
			<View style={styles.filler}>
				<ScrollView contentContainerStyle={styles.settingsWrapper(statusBarHeight)} style={styles.filler}>
					<StatusBar barStyle='dark-content' />
					<Text style={styles.settingsTitle}>{t('settings')}</Text>
					<UserSettingsPhoto photoUrl={user.avatar_url} />

					<DisplayedNameChangeController displayedName={user.alias} />

					<View style={styles.formSection}>
						<Text style={styles.formFieldTitle}>{t('selectLanguage')}:</Text>
						<LanguageSelector />
					</View>

					<View style={styles.filler} />

					<View style={styles.buttonWrapper}>
						<SystemButton onPress={createDeleteAccountAlert} Icon={<RubbishBin />} label={t('deleteAccount')} />
						<SystemButton onPress={createLoginOutAlert} Icon={<LogoutIcon />} label={t('loginOut')} />
					</View>
				</ScrollView>
				<Pressable onPress={router.back} style={styles.backButtonBackground}>
					<BackIcon width={sizes.xl} height={sizes.xl} />
				</Pressable>
			</View>
		)
	);
};
