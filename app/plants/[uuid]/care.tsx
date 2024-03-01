import React from 'react';
import { PlantCare } from '@src/screens/PlantCare/PlantCare';
import { useLocalSearchParams } from 'expo-router';
import { Spinner } from '@src/components/Spinner/Spinner';
import { sizes } from '@src/styling/sizes';

const Care = () => {
	const { uuid } = useLocalSearchParams<{ uuid?: string }>();

	if (!uuid) {
		return <Spinner size={sizes.xxl * 2} />;
	}

	return <PlantCare plantUuid={uuid} />;
};

export default Care;
