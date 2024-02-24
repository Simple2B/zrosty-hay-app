import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './OnboardingButtons.style';

export const DotIndicator = ({ selected }: { selected: boolean }) => {
	const { styles } = useStyles(styleSheet);

	return <View style={styles.dotIndicator(selected)} />;
};
