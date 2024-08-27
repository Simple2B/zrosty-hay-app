import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { useMe } from '@src/hooks/useMe';
import { helloMessage } from '@src/utils';
import { DEFAULT_USER_AVATAR } from '@src/constants/userSettings';
import { styleSheet } from './UserProfile.style';

export const UserProfile = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const user = useMe();
	const router = useRouter();

	const avatarUrl = user ? user.avatar_url : DEFAULT_USER_AVATAR;
	const userAlias = user ? user.alias : '';

	const onPress = () => {
		if (!user) {
			router.push('/login');
		}
		router.push('/settings');
	};

	return (
		<View style={styles.profile}>
			<View>
				<Text style={styles.helloText}>{helloMessage(t)}</Text>
				<Text style={styles.profileEmail}>{userAlias}</Text>
			</View>
			<Pressable style={styles.profileImageWrapper} onPress={onPress}>
				<FastImage
					style={styles.image}
					source={{
						uri: avatarUrl,
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</Pressable>
		</View>
	);
};
