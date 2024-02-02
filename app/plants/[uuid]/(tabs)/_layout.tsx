import { View, Text } from 'react-native';
import React from 'react';

import {
	createMaterialTopTabNavigator,
	MaterialTopTabNavigationOptions,
	MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { TabNavigationState, ParamListBase } from '@react-navigation/native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTobTab = withLayoutContext<
	MaterialTopTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
	return (
		<MaterialTobTab>
			<Text>layout</Text>
		</MaterialTobTab>
	);
};

export default Layout;
