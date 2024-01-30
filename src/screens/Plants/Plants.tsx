import { useStyles } from 'react-native-unistyles';
import { Text, View } from '@src/components/Themed';
import { styleSheet } from './Plant.style';
import { Categories } from '@src/components/Categories/Categories';
import { useState } from 'react';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);
	const [categoryUuids, setCategoryUuids] = useState<string[]>([]);

	const setUuid = (uuid: string) => {
		if (categoryUuids.includes(uuid)) {
			setCategoryUuids([...categoryUuids.filter((curUuid) => curUuid !== uuid)]);
		} else {
			setCategoryUuids([...categoryUuids, uuid]);
		}
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<Text>header</Text>
			</View>
			<Categories categoryUuids={categoryUuids} setCategoryUuid={setUuid} />
			<View style={styles.plants}>
				<Text>plants</Text>
			</View>
		</View>
	);
}
