import React from 'react';
import { PlantRecipesScreen } from '@src/screens/PlantRecipes/PlantRecipes';
import { useLocalSearchParams } from 'expo-router';
import { Spinner } from '@src/components/Spinner/Spinner';
import { sizes } from '@src/styling/sizes';

export default function Recipes() {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <Spinner size={sizes.xxl * 2} />;
	}

	return <PlantRecipesScreen plantUuid={uuid} />;
}
