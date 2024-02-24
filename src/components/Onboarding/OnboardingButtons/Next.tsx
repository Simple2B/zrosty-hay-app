import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './OnboardingButtons.style';
import ArrowRight from '@assets/icons/rightIcon.svg';

export const Next = ({ ...props }) => {
	const { styles } = useStyles(styleSheet);
	return (
		<TouchableOpacity style={styles.nextButton} {...props}>
			<ArrowRight style={styles.arrowIcon} />
		</TouchableOpacity>
	);
};
