import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { styleSheet } from './NotFound.style';

type Props = {
	withGoBack?: boolean;
};

export const NotFound = ({ withGoBack = true }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<SafeAreaView style={styles.wrapper}>
			<Text style={styles.title}>{t('notFound')}</Text>
			{withGoBack && (
				<TouchableOpacity onPress={router.back}>
					<Text style={styles.backBtn}>{t('goBack')}</Text>
				</TouchableOpacity>
			)}
		</SafeAreaView>
	);
};
