import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './SystemButton.style';

type SettingButtonProps = {
	onPress: () => void;
	Icon: React.ReactNode;
	label: string;
};

export const SystemButton = ({ onPress, Icon, label }: SettingButtonProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			{Icon}
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	);
};
