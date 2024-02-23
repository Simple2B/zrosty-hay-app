import { PlantSize } from './constants/plant';
import { TFunction } from 'i18next';

export const getSizeKey = (maxSize: number): string => {
	if (maxSize > 100) {
		return PlantSize.large;
	} else if (maxSize > 50) {
		return PlantSize.medium;
	}
	return PlantSize.small;
};

export function convertDays(inputDays: number, t: TFunction<'translation', undefined>): string {
	if (inputDays === 0) return '';
	const months = Math.floor(inputDays / 31);
	const remainingDays = inputDays % 31;

	if (months === 0) {
		return formatDays(inputDays, t);
	} else if (remainingDays === 0) {
		return formatMonths(months, t);
	} else {
		return `${formatMonths(months, t)}\n${formatDays(remainingDays, t)}`;
	}
}

function formatDays(number: number, t: TFunction<'translation', undefined>): string {
	if (number % 10 === 1 && number % 100 !== 11) {
		return `${number} ${t('day')}`.toLocaleLowerCase();
	} else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
		return `${number} ${t('dni')}`;
	} else {
		return `${number} ${t('days')}`;
	}
}

function formatMonths(number: number, t: TFunction<'translation', undefined>): string {
	if (number % 10 === 1 && number % 100 !== 11) {
		return `${number} ${t('month')}`;
	} else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
		return `${number} ${t('misaca')}`;
	} else {
		return `${number} ${t('months')}`;
	}
}
