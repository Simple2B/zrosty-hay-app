import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import { sizes } from '@src/styling/sizes';
import { PlantCategory } from '@src/api/model';
import { styleSheet } from './Categories.style';
import { View, Text } from '../Themed';

// type CategoriesProps = {
// };

export const Categories = () => {
	const { t } = useTranslation();
	const { styles } = useStyles(styleSheet);

	return (
		<View>
			<Text>{t('')}</Text>
		</View>
	);
};
