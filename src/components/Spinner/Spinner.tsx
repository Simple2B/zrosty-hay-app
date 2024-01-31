import React from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';

import GreenSpinner from '@assets/spinners/green-spinner.svg';

type SpinnerProps = {
	duration?: number;
	size?: number;
};

export const Spinner = ({ size = 24, duration = 1000 }: SpinnerProps) => {
	const spinValue = new Animated.Value(0);

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	Animated.loop(
		Animated.timing(spinValue, {
			toValue: 1,
			duration: duration,
			easing: Easing.linear,
			useNativeDriver: true,
		}),
	).start();

	return (
		<View style={styles.w}>
			<Animated.View style={{ transform: [{ rotate: spin }] }}>
				<GreenSpinner height={size} width={size} />
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	w: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
