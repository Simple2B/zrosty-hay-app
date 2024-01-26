import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { Text, View } from '../../components/Themed';

export default function Plants() {
	const { styles } = useStyles(styleSheet);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Plants</Text>
		</View>
	);
}

const styleSheet = createStyleSheet((theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: theme.size.xxl,
		fontWeight: theme.fontWeight.bold,
	},
}));
