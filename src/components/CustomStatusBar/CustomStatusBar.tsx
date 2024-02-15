import React from 'react';
import { StatusBar } from 'react-native';

type Props = {
	textColor: 'light-content' | 'dark-content';
};

export const CustomStatusBar = ({ textColor }: Props) => {
	return <StatusBar barStyle={textColor} />;
};
