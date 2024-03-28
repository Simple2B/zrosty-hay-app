import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ONBOARDING_STATUS_KEY } from '@src/constants/storage';

export const useOnboardingStatus = () => {
	const [hasOnboardingSeen, setHasOnboardingSeen] = useState(false);

	useEffect(() => {
		const loadStatus = async () => {
			const value = await AsyncStorage.getItem(ONBOARDING_STATUS_KEY);
			setHasOnboardingSeen(value === 'true');
		};

		loadStatus();
	}, []);

	const setOnboardingStatus = async (status: boolean) => {
		try {
			await AsyncStorage.setItem(ONBOARDING_STATUS_KEY, String(status));
			setHasOnboardingSeen(status);
		} catch (error) {
			console.log(error);
		}
	};

	return { hasOnboardingSeen, setOnboardingStatus };
};
