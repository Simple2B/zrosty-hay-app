import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { styleSheet } from './FormInput.style';
import { Spinner } from '@src/components/Spinner/Spinner';

type Props = {
	label: string;
	defaultValue: string;
	placeholder: string;
	onChange: (text: string) => void;
	isPending?: boolean;
};

export const FormInput = ({ label, defaultValue, placeholder, onChange, isPending }: Props) => {
	const [isFocused, setFocused] = useState(false);
	const { styles, theme } = useStyles(styleSheet, { isFocused, isPending });

	const handleFocus = () => {
		setFocused(true);
	};

	const handleBlur = () => {
		setFocused(false);
	};

	return (
		<View>
			<View style={styles.formSection}>
				<Text style={styles.formFieldTitle}>{label}</Text>
				<View style={styles.formField}>
					<TextInput
						placeholder={placeholder}
						value={defaultValue}
						onChangeText={onChange}
						placeholderTextColor={theme.colors.borderGrey}
						onFocus={handleFocus}
						onBlur={handleBlur}
						editable={!isPending}
						style={styles.textInput}
					/>
					<View style={styles.spinnerWrapper}>
						<Spinner />
					</View>
				</View>
			</View>
		</View>
	);
};
