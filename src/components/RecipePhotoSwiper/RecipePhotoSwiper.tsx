import React from 'react';

import { useAPIGetRecipePhotos } from '@src/api/recipes/recipes';
import { queryKeys } from '@src/constants/queryKeys';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import { PhotoSwiper } from '../PhotoSwiper/PhotoSwiper';
import { TRecipeScreenProps } from '@src/types/recipe';

export const RecipePhotoSwiper = ({ recipeUuid, plantUuid }: TRecipeScreenProps) => {
	const { data, isLoading, isError } = useAPIGetRecipePhotos(recipeUuid, {
		query: {
			queryKey: [queryKeys.GET_RECIPE_PHOTOS, recipeUuid],
		},
	});

	if (isLoading || !data) {
		return <Spinner size={32} />;
	}

	if (isError) {
		// TODO temporary bind
		return <NotFound />;
	}

	// TODO back href
	return <PhotoSwiper photos={data.data} plantUuid={plantUuid} />;
};
