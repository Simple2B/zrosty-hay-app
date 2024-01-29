import Room from '@assets/icons/category/room.svg';
import Vegetable from '@assets/icons/category/vegetable.svg';
import Fruit from '@assets/icons/category/fruit.svg';
import Garden from '@assets/icons/category/garden.svg';

export enum Categorys {
	room = 'rooms',
	garden = 'garden',
	vegetable = 'vegetables',
	fruit = 'fruits',
}

export const categories = [
	{ SvgIcon: Room, category: Categorys.room },
	{ SvgIcon: Garden, category: Categorys.garden },
	{ SvgIcon: Vegetable, category: Categorys.vegetable },
	{ SvgIcon: Fruit, category: Categorys.fruit },
];
