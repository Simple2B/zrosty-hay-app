import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './FormInput.style';

type Props = {
	label: string;
	defaultValue: string;
	placeholder: string;
	onChange: (text: string) => void;
};

export const FormInput = ({ label, defaultValue, placeholder, onChange }: Props) => {
	const { styles, theme } = useStyles(styleSheet);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={styles.formSection}>
			<Text style={styles.formFieldTitle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				value={defaultValue}
				onChangeText={(text) => {
					onChange(text);
				}}
				placeholderTextColor={theme.colors.borderGrey}
				style={styles.formField(isFocused)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	);
};
