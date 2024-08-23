import { useOnboardingStatus } from '@src/hooks/useOnboardingStatus';
import { OnboardingScreen } from '@src/components/Onboarding/Onboarding';
import { useMe } from '@src/hooks/useMe';
import LoginScreen from '@src/screens/Login/Login';
import PlantsScreen from '@src/screens/Plants/Plants';

export default function Onboarding() {
	const { hasOnboardingSeen } = useOnboardingStatus();
	const user = useMe();

	if (!hasOnboardingSeen) {
		return <OnboardingScreen />;
	}

	if (user) {
		return <PlantsScreen />;
	}

	return <LoginScreen />;
}
