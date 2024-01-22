import React from 'react';
import { Button, Text, View } from 'react-native';

type FancyTitleProps = {
	text: string;
	size: 'small' | 'medium' | 'large';
	onPress: (title: string) => void;
};

const SIZES = {
	small: 16,
	medium: 24,
	large: 32,
};

export const FancyTitle = ({ text, size = 'medium', onPress }: FancyTitleProps) => {
	const handlePress = () => {
		onPress(text);
	};

	return (
		<View style={{ backgroundColor: 'gold' }}>
			<Text style={{ fontSize: SIZES[size] }}>{text}</Text>
			<Button title='Click me' onPress={handlePress} />
		</View>
	);
};
