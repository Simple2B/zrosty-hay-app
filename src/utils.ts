import { PlantSize } from './constants/plant';

export const getSizeKey = (maxSize: number): string => {
	if (maxSize > 100) {
		return PlantSize.large;
	} else if (maxSize > 50) {
		return PlantSize.medium;
	}
	return PlantSize.small;
};
