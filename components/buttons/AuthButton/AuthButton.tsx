import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AuthBtnType, ICONS } from './AuthButton.constans';
import { styleSheet } from './AuthButton.style';

type AuthButtonProps = {
	type: AuthBtnType;
};

export const AuthButton = ({ type = AuthBtnType.google }: AuthButtonProps) => {
	const { styles } = useStyles(styleSheet);

	// TODO add handle

	return (
		<TouchableOpacity style={styles.container}>
			{ICONS[type]}
			<Text style={styles.text}>Увійти з {type}</Text>
		</TouchableOpacity>
	);
};
