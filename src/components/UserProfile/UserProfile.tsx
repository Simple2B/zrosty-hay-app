import { Alert, Button, Pressable, Text, View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './UserProfile.style';
import { useMe } from '@src/hooks/useMe';
import { useLogout } from '@src/hooks/useLogout';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { helloMessage } from '@src/utils';

// TODO: need to change, tempopary avatar
const tempopary_icon_url = 'https://nretnil.com/avatar/LawrenceEzekielAmos.png';

export const UserProfile = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const user = useMe();
	const loginout = useLogout();

	const createLoginOutAlert = () =>
		Alert.alert(t('loginOut'), t('loginOutMessage'), [
			{
				text: t('loginOutOk'),
				onPress: async () => {
					if (!user) return;
					await loginout();
				},
			},
			{
				text: t('loginOutCancel'),
			},
		]);


	if (!user) {
		return null;
	}

	return (
		<View style={styles.profile}>
			<View>
				<Text style={styles.helloText}>{helloMessage(t)}</Text>
				<Text style={styles.profileEmail}>{user.email}</Text>
			</View>
			<Pressable style={styles.profileImageWrapper} onPress={createLoginOutAlert}>
				<FastImage
					key={user.id}
					style={styles.image}
					source={{
						uri: tempopary_icon_url,
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</Pressable>
		</View>
	);
};
