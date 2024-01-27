import Svg, { Path } from 'react-native-svg';
import { styleSheet } from './common.style';
import { useStyles } from 'react-native-unistyles';

export const SunIcon = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<Svg width={styles.smallIcon.width} height={styles.smallIcon.width} viewBox='0 0 12 13' fill='none'>
			<Path
				d='M5.99992 0C6.27606 0 6.49992 0.223858 6.49992 0.5V1.16667C6.49992 1.44281 6.27606 1.66667 5.99992 1.66667C5.72378 1.66667 5.49992 1.44281 5.49992 1.16667V0.5C5.49992 0.223858 5.72378 0 5.99992 0Z'
				fill='#FED969'
			/>
			<Path
				d='M9.99992 6.5C9.99992 8.70914 8.20906 10.5 5.99992 10.5C3.79078 10.5 1.99992 8.70914 1.99992 6.5C1.99992 4.29086 3.79078 2.5 5.99992 2.5C8.20906 2.5 9.99992 4.29086 9.99992 6.5Z'
				fill='#FED969'
			/>
			<Path
				d='M6.49992 11.8333C6.49992 11.5572 6.27606 11.3333 5.99992 11.3333C5.72378 11.3333 5.49992 11.5572 5.49992 11.8333V12.5C5.49992 12.7761 5.72378 13 5.99992 13C6.27606 13 6.49992 12.7761 6.49992 12.5V11.8333Z'
				fill='#FED969'
			/>
			<Path
				d='M11.7663 3.27669C11.9043 3.51584 11.8224 3.82163 11.5833 3.95971L11.0059 4.29304C10.7668 4.43111 10.461 4.34917 10.3229 4.11003C10.1848 3.87088 10.2668 3.56508 10.5059 3.42701L11.0833 3.09368C11.3224 2.95561 11.6282 3.03755 11.7663 3.27669Z'
				fill='#FED969'
			/>
			<Path
				d='M0.416587 3.95971C0.177441 3.82163 0.0955035 3.51584 0.233575 3.27669C0.371646 3.03755 0.677441 2.95561 0.916587 3.09368L1.49394 3.42701C1.73308 3.56508 1.81502 3.87088 1.67695 4.11003C1.53888 4.34917 1.23308 4.43111 0.993938 4.29304L0.416587 3.95971Z'
				fill='#FED969'
			/>
			<Path
				d='M0.233575 9.81673C0.0955035 9.57759 0.177441 9.27179 0.416587 9.13372L0.993938 8.80039C1.23308 8.66232 1.53888 8.74425 1.67695 8.9834C1.81502 9.22255 1.73308 9.52834 1.49394 9.66641L0.916587 9.99974C0.677441 10.1378 0.371646 10.0559 0.233575 9.81673Z'
				fill='#FED969'
			/>
			<Path
				d='M11.5833 9.13372C11.8224 9.27179 11.9043 9.57759 11.7663 9.81673C11.6282 10.0559 11.3224 10.1378 11.0833 9.99974L10.5059 9.66641C10.2668 9.52834 10.1848 9.22255 10.3229 8.9834C10.461 8.74425 10.7668 8.66232 11.0059 8.80039L11.5833 9.13372Z'
				fill='#FED969'
			/>
		</Svg>
	);
};
