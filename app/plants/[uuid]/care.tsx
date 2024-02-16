import React from 'react';
import { PlantCare } from '@src/screens/PlantCare/PlantCare';
import { useLocalSearchParams } from 'expo-router';
import { NotFound } from '@src/components/NotFound/NotFound';

const Care = () => {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <NotFound />;
	}

	return <PlantCare plantUuid={uuid} />;
};

export default Care;
