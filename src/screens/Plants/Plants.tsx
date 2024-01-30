import { useStyles } from 'react-native-unistyles';
import { View, Text } from 'react-native';

import { styleSheet } from './Plant.style';
import { Categories } from '@src/components/Categories/Categories';
import { useState } from 'react';

export default function PlantsScreen() {
	const { styles } = useStyles(styleSheet);
	const [categoryUuids, setCategoryUuids] = useState<string[]>([]);

	const handleSelectCategory = (uuid: string) => {
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
			<Categories categoryUuids={categoryUuids} handleSelectCategory={handleSelectCategory} />
			<View style={styles.plants}>
				<Text>plants</Text>
			</View>
		</View>
	);
}
