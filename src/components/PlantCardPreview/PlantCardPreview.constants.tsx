import Sun from '@assets/icons/plantCard/sun.svg';
import RainDrop from '@assets/icons/plantCard/rainDrop.svg';
import Ruler from '@assets/icons/plantCard/ruler.svg';
import Plant from '@assets/icons/plantCard/plant.svg';
import Thermometer from '@assets/icons/plantCard/thermometer.svg';

export enum Category {
	plant = 'plant',
	rainDrop = 'rainDrop',
	ruler = 'ruler',
	sun = 'sun',
	thermometer = 'thermometer',
}

export const categoryToSvg = {
	[Category.sun]: Sun,
	[Category.rainDrop]: RainDrop,
	[Category.ruler]: Ruler,
	[Category.plant]: Plant,
	[Category.thermometer]: Thermometer,
};
