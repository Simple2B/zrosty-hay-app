import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './NotFound.style';
import { router } from 'expo-router';

export const NotFound = () => {
	const { styles } = useStyles(styleSheet);

	return (
		<SafeAreaView style={styles.wrapper}>
			<Text style={styles.title}>Not Found</Text>
			<TouchableOpacity onPress={router.back}>
				<Text style={styles.backBtn}>Go back</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
