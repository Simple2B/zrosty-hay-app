import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { useMe } from '@src/hooks/useMe';
import { helloMessage } from '@src/utils';
import { styleSheet } from './UserProfile.style';

export const UserProfile = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);
	const user = useMe();

	if (!user) {
		return null;
	}

	return (
		<View style={styles.profile}>
			<View>
				<Text style={styles.helloText}>{helloMessage(t)}</Text>
				<Text style={styles.profileEmail}>{user.alias}</Text>
			</View>
			<Link href='/settings' style={styles.profileImageWrapper}>
				<FastImage
					key={user.id}
					style={styles.image}
					source={{
						uri: user.avatar_url,
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</Link>
		</View>
	);
};
