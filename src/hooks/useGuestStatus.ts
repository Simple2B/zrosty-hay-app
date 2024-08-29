import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGGED_AS_GUEST } from '@src/constants/storage';

export const useGuestStatus = () => {
	const [isGuest, setIsGuest] = useState<boolean | null>(null);

	useEffect(() => {
		const checkGuestStatus = async () => {
			const guestStatus = await AsyncStorage.getItem(LOGGED_AS_GUEST);
			setIsGuest(guestStatus === 'true');
		};

		checkGuestStatus();
	}, []);

	return isGuest;
};
