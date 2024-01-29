import Svg, { Path } from 'react-native-svg';
import { styleSheet } from './common.style';
import { useStyles } from 'react-native-unistyles';

export const ThermometerIcon = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<Svg width={styles.icon.width} height={styles.icon.width} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M8.93317 8.70016V4.4335C8.93317 4.00915 8.7646 3.60218 8.46454 3.30213C8.16448 3.00207 7.75752 2.8335 7.33317 2.8335C6.90882 2.8335 6.50186 3.00207 6.2018 3.30213C5.90174 3.60218 5.73317 4.00915 5.73317 4.4335V8.70016C5.28542 9.03597 4.95468 9.50415 4.7878 10.0384C4.62092 10.5726 4.62636 11.1458 4.80335 11.6768C4.98034 12.2077 5.3199 12.6696 5.77394 12.9968C6.22798 13.3241 6.77348 13.5002 7.33317 13.5002C7.89286 13.5002 8.43836 13.3241 8.8924 12.9968C9.34644 12.6696 9.686 12.2077 9.86299 11.6768C10.04 11.1458 10.0454 10.5726 9.87854 10.0384C9.71166 9.50415 9.38092 9.03597 8.93317 8.70016ZM7.33317 3.90016C7.47462 3.90016 7.61027 3.95635 7.71029 4.05637C7.81031 4.15639 7.8665 4.29205 7.8665 4.4335V6.0335H6.79984V4.4335C6.79984 4.29205 6.85603 4.15639 6.95605 4.05637C7.05607 3.95635 7.19172 3.90016 7.33317 3.90016Z'
				fill='#FF7272'
			/>
		</Svg>
	);
};