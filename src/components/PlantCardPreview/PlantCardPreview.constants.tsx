import Sun from '@assets/icons/plantCard/sun.svg';
import RainDrop from '@assets/icons/plantCard/rainDrop.svg';
import Ruler from '@assets/icons/plantCard/ruler.svg';
import Plant from '@assets/icons/plantCard/plant.svg';
import Thermometer from '@assets/icons/plantCard/thermometer.svg';

export enum CardDescriptionIcons {
	plant = 'plant',
	rainDrop = 'rainDrop',
	ruler = 'ruler',
	sun = 'sun',
	thermometer = 'thermometer',
}

export const cartDescriptionToSvg = {
	[CardDescriptionIcons.sun]: Sun,
	[CardDescriptionIcons.rainDrop]: RainDrop,
	[CardDescriptionIcons.ruler]: Ruler,
	[CardDescriptionIcons.plant]: Plant,
	[CardDescriptionIcons.thermometer]: Thermometer,
};
