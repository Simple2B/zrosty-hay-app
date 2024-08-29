import { useOnboardingStatus } from '@src/hooks/useOnboardingStatus';
import { OnboardingScreen } from '@src/components/Onboarding/Onboarding';
import { useMe } from '@src/hooks/useMe';
import LoginScreen from '@src/screens/Login/Login';
import PlantsScreen from '@src/screens/Plants/Plants';
import { useGuestStatus } from '@src/hooks/useGuestStatus';

export default function Onboarding() {
	const { hasOnboardingSeen } = useOnboardingStatus();
	const user = useMe();
	const isGuest = useGuestStatus();

	if (!hasOnboardingSeen) {
		return <OnboardingScreen />;
	}

	if (user || isGuest) {
		return <PlantsScreen />;
	}

	return <LoginScreen />;
}
