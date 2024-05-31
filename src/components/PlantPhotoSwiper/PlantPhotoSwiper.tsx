import React from 'react';

import { useAPIGetPlantPhotos } from '@src/api/plants/plants';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import { TPlantScreenProps } from '@src/types/plant';
import { PhotoSwiper } from '../PhotoSwiper/PhotoSwiper';

export const PlantPhotoSwiper = ({ plantUuid }: TPlantScreenProps) => {
	const { data, isLoading, isError } = useAPIGetPlantPhotos(plantUuid, {
		query: {
			queryKey: [queryKeys.GET_PLANT_PHOTOS, plantUuid],
		},
	});

	if (isLoading || !data) {
		return <Spinner size={32} />;
	}

	if (isError) {
		// TODO temporary bind
		return <NotFound />;
	}

	return <PhotoSwiper photos={data.data} backIconHref='/plants/' />;
};
