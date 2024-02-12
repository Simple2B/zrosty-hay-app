import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { styleSheet } from './PlantDetailTabBtns.style';
import { router } from 'expo-router';

export function PlantDetailTabBtns({
	state,
	descriptors,
	position,
	plantUuid,
}: MaterialTopTabBarProps & { plantUuid: string }) {
	const { styles } = useStyles(styleSheet);
	return (
		<View style={styles.tabBar}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						  ? options.title
						  : route.name;

				const isFocused = state.index === index;

				const handlerNavigate = () => {
					const routeName = state.routes[index].name === 'index' ? '' : state.routes[index].name;
					router.push(`/plants/${plantUuid}/${routeName}`);
				};

				const inputRange = state.routes.map((_, i) => i);
				const opacity = position.interpolate({
					inputRange,
					outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
				});

				return (
					<TouchableOpacity
						key={route.key}
						accessibilityRole='button'
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={handlerNavigate}
						onLongPress={handlerNavigate}
						style={styles.tabBarItemwrapper(isFocused)}
					>
						<Animated.Text style={styles.tabBarItem(isFocused, opacity)}>{label as string}</Animated.Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}
