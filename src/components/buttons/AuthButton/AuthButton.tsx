import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AuthBtnType, ICONS } from './AuthButton.constans';
import { styleSheet } from './AuthButton.style';

type AuthButtonProps = {
	type: AuthBtnType;
	onPress: () => void;
	disabled: boolean;
};

export const AuthButton = ({ disabled, onPress, type = AuthBtnType.google }: AuthButtonProps) => {
	const { styles } = useStyles(styleSheet);

	return (
		<TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
			{ICONS[type]}
			<Text style={styles.text}>Увійти з {type}</Text>
		</TouchableOpacity>
	);
};
