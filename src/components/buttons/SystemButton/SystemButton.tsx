import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './SystemButton.style';

type SettingButtonProps = {
	onPress: () => void;
	icon: React.ReactNode;
	label: string;
};

export const SystemButton = ({ onPress, icon, label }: SettingButtonProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			{icon}
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	);
};
