import Svg, { Path } from 'react-native-svg';
import { styleSheet } from './common.style';
import { useStyles } from 'react-native-unistyles';

export const PlantIcon = () => {
	const { styles } = useStyles(styleSheet);
	return (
		<Svg width={styles.icon.width} height={styles.icon.width} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M10.4902 2.44838C10.4616 2.17371 10.2159 1.97418 9.94119 2.00272C9.66653 2.03125 9.467 2.27704 9.49553 2.5517C9.53285 2.9109 9.37292 3.93441 8.23276 4.57372C7.96072 4.72626 7.73657 4.90395 7.55355 5.09748C7.49222 4.95966 7.39581 4.8405 7.2766 4.74472C6.70556 4.28591 5.82496 3.96463 4.59855 4.12981C3.81883 4.23483 3.39236 4.26022 3.17208 4.27334C3.1396 4.27527 3.11156 4.27694 3.08758 4.27856L3.08198 4.27893C3.04681 4.28126 2.97236 4.28618 2.90687 4.30262C2.885 4.30811 2.84635 4.31902 2.80223 4.34018C2.7623 4.35934 2.67993 4.40464 2.61115 4.49755C2.52932 4.60807 2.49647 4.74608 2.5183 4.88023C2.53661 4.99279 2.5879 5.06981 2.61337 5.10407C2.65979 5.16651 2.71284 5.20697 2.72508 5.2163L2.72642 5.21733C2.74372 5.23062 2.76217 5.2435 2.77174 5.25018L2.77352 5.25142C2.79701 5.26784 2.813 5.2791 2.83046 5.29323C2.84617 5.30594 2.86263 5.3177 2.87977 5.32842C3.62183 5.79293 4.91323 6.2601 6.57141 6.34793C6.6871 6.35406 6.80077 6.34233 6.90827 6.31434C6.90432 6.33157 6.90054 6.34879 6.89693 6.366C6.78125 6.91734 6.8392 7.44966 6.94617 7.83333H4.00016C3.63197 7.83333 3.3335 8.13181 3.3335 8.5V8.56219C3.3335 8.96389 3.37888 9.3643 3.46878 9.75581L4.47362 14.1317C4.6127 14.7374 5.15172 15.1667 5.77314 15.1667H9.56052C10.1819 15.1667 10.721 14.7374 10.86 14.1317L11.8649 9.75581C11.9548 9.3643 12.0002 8.96389 12.0002 8.56219V8.5C12.0002 8.13181 11.7017 7.83333 11.3335 7.83333H7.97033C7.97033 7.77759 7.96094 7.7209 7.94114 7.6654C7.85512 7.42423 7.78552 7.00076 7.87562 6.57134C7.9239 6.34123 8.01745 6.10876 8.18381 5.89653C8.32705 6.07143 8.53089 6.20038 8.76715 6.25802C10.9915 6.80067 12.8671 6.6643 13.9837 6.33261C14.003 6.32685 14.022 6.31993 14.0406 6.31187C14.0731 6.29773 14.1019 6.28751 14.137 6.27512L14.1394 6.27429C14.1541 6.26912 14.1787 6.26041 14.2018 6.25108L14.2035 6.2504C14.2201 6.24373 14.2842 6.21794 14.3471 6.16903C14.3814 6.14233 14.4519 6.08132 14.4999 5.97725C14.557 5.85331 14.5622 5.71103 14.5127 5.58213C14.471 5.47369 14.4034 5.40748 14.3693 5.37776C14.3318 5.345 14.2966 5.32355 14.2758 5.31176C14.2117 5.27532 14.1317 5.24726 14.0866 5.23145L14.0815 5.22967C14.0521 5.21932 14.0175 5.2075 13.9774 5.19376C13.704 5.1001 13.1711 4.91755 12.2201 4.51054C11.4361 4.17496 10.7327 4.05005 10.1205 4.06216C10.4569 3.44302 10.5297 2.82914 10.4902 2.44838Z'
				fill='#95C11F'
			/>
		</Svg>
	);
};