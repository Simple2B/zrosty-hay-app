import { OnboardingScreen } from '@src/components/Onboarding/Onboarding';
import { useOnboardingStatus } from '@src/hooks/useOnboardingStatus';
import LoginScreen from '@src/screens/Login/Login';

export default function Onboarding() {
	const { hasOnboardingSeen } = useOnboardingStatus();

	return <>{hasOnboardingSeen ? <LoginScreen /> : <OnboardingScreen />}</>;
}
