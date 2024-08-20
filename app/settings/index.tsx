import { UserSettings } from '@src/components/UserSettings/UserSettings';
import { SafeAreaView } from 'react-native';

export default function Settings() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<UserSettings />
		</SafeAreaView>
	);
}
