import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './UserSettingsPhoto.style';

type UserSettingsPhotoProps = {
	photoUrl: string;
};

export const UserSettingsPhoto = ({ photoUrl }: UserSettingsPhotoProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<Pressable style={styles.profileImageWrapper}>
			<FastImage
				style={styles.image}
				source={{
					uri: photoUrl,
					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.contain}
			/>
		</Pressable>
	);
};
