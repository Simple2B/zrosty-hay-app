import Svg, { Path } from 'react-native-svg';
import { styleSheet } from './common.style';
import { useStyles } from 'react-native-unistyles';

export const RainDropIcon = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<Svg width={styles.icon.width} height={styles.icon.width} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M8.00014 14.5001C2.94904 14.5001 4.17668 8.81936 7.43556 2.83799C7.68075 2.38796 8.31992 2.38751 8.56869 2.83558C11.8899 8.81784 13.6834 14.5001 8.00014 14.5001Z'
				fill='#6FA9FF'
			/>
		</Svg>
	);
};
