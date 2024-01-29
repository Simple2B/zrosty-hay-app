import Svg, { Path } from 'react-native-svg';
import { styleSheet } from './common.style';
import { useStyles } from 'react-native-unistyles';

export const RulerIcon = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<Svg width={styles.icon.width} height={styles.icon.width} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M1.3335 10.9108C1.3335 11.4755 1.78816 11.9302 2.69683 12.8388L3.6615 13.8035C4.57016 14.7122 5.02483 15.1668 5.5895 15.1668C6.15416 15.1668 6.6095 14.7122 7.51816 13.8035L13.3035 8.01816C14.2122 7.10883 14.6668 6.6535 14.6668 6.0895C14.6668 5.5255 14.2122 5.07016 13.3035 4.1615L12.3388 3.19683C11.4302 2.28816 10.9755 1.8335 10.4108 1.8335C9.90816 1.8335 9.4935 2.1935 8.76816 2.91216C8.78827 2.92691 8.80722 2.94318 8.82483 2.96083L9.76816 3.90416C9.8159 3.95031 9.85396 4.0055 9.88014 4.06651C9.90631 4.12753 9.92007 4.19314 9.92062 4.25953C9.92116 4.32592 9.90848 4.39176 9.88331 4.45319C9.85814 4.51463 9.82099 4.57044 9.77402 4.61736C9.72705 4.66428 9.67121 4.70138 9.60975 4.7265C9.54829 4.75161 9.48244 4.76423 9.41606 4.76362C9.34967 4.76301 9.28406 4.74919 9.22307 4.72296C9.16208 4.69672 9.10693 4.65861 9.06083 4.61083L8.11816 3.66816C8.1003 3.65032 8.0838 3.63116 8.06883 3.61083L7.3535 4.32616C7.37399 4.34093 7.39317 4.35744 7.41083 4.3755L8.82483 5.7895C8.87395 5.83527 8.91335 5.89047 8.94068 5.9518C8.96801 6.01314 8.98271 6.07935 8.98389 6.14648C8.98507 6.21362 8.97272 6.2803 8.94758 6.34256C8.92243 6.40482 8.885 6.46138 8.83752 6.50885C8.79004 6.55633 8.73349 6.59376 8.67123 6.61891C8.60897 6.64406 8.54228 6.65641 8.47515 6.65522C8.40801 6.65404 8.3418 6.63934 8.28047 6.61202C8.21914 6.58469 8.16394 6.54529 8.11816 6.49616L6.7035 5.08283C6.68561 5.06477 6.66912 5.04538 6.65416 5.02483L5.94016 5.74016C5.96016 5.75483 5.97883 5.7715 5.9975 5.7895L6.94016 6.73216C7.02848 6.82695 7.07656 6.95231 7.07428 7.08184C7.07199 7.21138 7.01952 7.33497 6.92791 7.42658C6.8363 7.51819 6.71271 7.57066 6.58318 7.57295C6.45364 7.57523 6.32828 7.52715 6.2335 7.43883L5.28883 6.4975C5.27097 6.47965 5.25448 6.46048 5.2395 6.44016L4.52483 7.1535C4.54483 7.16816 4.56483 7.18483 4.58216 7.20283L5.99683 8.6175C6.08786 8.71184 6.1382 8.83816 6.137 8.96926C6.1358 9.10036 6.08316 9.22574 5.99041 9.3184C5.89766 9.41106 5.77223 9.46359 5.64113 9.46467C5.51003 9.46574 5.38375 9.41529 5.2895 9.32416L3.8755 7.91016C3.85763 7.89232 3.84114 7.87316 3.82616 7.85283L3.11083 8.56816C3.13132 8.58293 3.1505 8.59944 3.16816 8.6175L4.11083 9.56016C4.19915 9.65495 4.24723 9.78031 4.24495 9.90984C4.24266 10.0394 4.19019 10.163 4.09858 10.2546C4.00697 10.3462 3.88338 10.3987 3.75384 10.4009C3.62431 10.4032 3.49895 10.3551 3.40416 10.2668L2.46016 9.3255C2.44256 9.30784 2.42629 9.2889 2.4115 9.26883C1.69283 9.9935 1.3335 10.4082 1.3335 10.9108Z'
				fill='#2F5233'
			/>
		</Svg>
	);
};