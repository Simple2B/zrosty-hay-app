import { useOnboardingStatus } from '@src/hooks/useOnboardingStatus';
import { OnboardingScreen } from '@src/components/Onboarding/Onboarding';
import { useMe } from '@src/hooks/useMe';
import LoginScreen from '@src/screens/Login/Login';
import PlantsScreen from '@src/screens/Plants/Plants';
import { useAppStore } from '@src/storage/storage';

export default function Onboarding() {
	const { hasOnboardingSeen } = useOnboardingStatus();
	const { isGuest } = useAppStore();
	const user = useMe();

	if (!hasOnboardingSeen) {
		return <OnboardingScreen />;
	}

	if (user || isGuest) {
		return <PlantsScreen />;
	}

	return <LoginScreen />;
}
