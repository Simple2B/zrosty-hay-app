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
	const [isFocused, setFocused] = useState(false);
	const { styles, theme } = useStyles(styleSheet, { isFocused });

	const handleFocus = () => {
		setFocused(true);
	};

	const handleBlur = () => {
		setFocused(false);
	};

	return (
		<View style={styles.formSection}>
			<Text style={styles.formFieldTitle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				value={defaultValue}
				onChangeText={onChange}
				placeholderTextColor={theme.colors.borderGrey}
				style={styles.formField}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</View>
	);
};
