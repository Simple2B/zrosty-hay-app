import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function checkIfFirstLaunch() {
	try {
		const hasFirstLaunched = await AsyncStorage.getItem('hasOnboardingSeen');
		if (hasFirstLaunched === null) {
			return true;
		}
		return false;
	} catch (error) {
		return false;
	}
}

const useGetOnboardingStatus = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(false);
	const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const firstLaunch = await checkIfFirstLaunch();
			console.log(firstLaunch);
			setIsFirstLaunch(firstLaunch);
			setIsFirstLaunchIsLoading(false);
		};

		fetchData();
	}, []);

	return {
		isFirstLaunch: isFirstLaunch,
		isLoading: isFirstLaunchIsLoading,
	};
};

export default useGetOnboardingStatus;
