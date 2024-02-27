import { Button, Text, View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './UserProfile.style';
import { useMe } from '@src/hooks/useMe';
import { useLogout } from '@src/hooks/useLogout';

// Temporary component
export const UserProfile = () => {
	const { styles } = useStyles(styleSheet);
	const user = useMe();
	const loginout = useLogout();
	const handlerLogout = async () => {
		if (!user) return;
		await loginout();
	};

	if (!user) {
		return null;
	}

	return (
		<View style={styles.profile}>
			<Text style={styles.profileEmail}>{user.email}</Text>
			<Button title='Login out' onPress={handlerLogout} />
		</View>
	);
};
