import React from 'react';
import { StatusBar, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './CustomStatusBar.style';

//TODO: check status bar for android
export const CustomStatusBar = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<View style={styles.wrapper}>
			<StatusBar translucent barStyle='light-content' />
		</View>
	);
};
