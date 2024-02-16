import { Text, View } from 'react-native';
import React from 'react';
import { PlantRecipesScreen } from '@src/screens/PlantRecipes/PlantRecipes';
import { useLocalSearchParams } from 'expo-router';
import { NotFound } from '@src/components/NotFound/NotFound';

export default function Recipes() {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <NotFound />;
	}

	return <PlantRecipesScreen plantUuid={uuid} />;
}
