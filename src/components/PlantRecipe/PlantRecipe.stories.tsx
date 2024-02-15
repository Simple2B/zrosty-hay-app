import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { PlantRecipe } from './PlantRecipe';
import { View } from 'react-native';

export default {
	title: 'ui/PlantRecipe',
	component: PlantRecipe,
	args: {},

	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof PlantRecipe>;

const Template: ComponentStory<typeof PlantRecipe> = (args) => <PlantRecipe {...args} />;

export const Story = Template.bind({});

const recipe = {
	categories: [
		{ name: 'Легко', uuid: '1' },
		{ name: 'Важко', uuid: '2' },
		{ name: 'testdasdasdasd', uuid: '3' },
		{ name: 'testdasdasd', uuid: '4' },
		{ name: 'test21313', uuid: '5' },
		{ name: 'testdasdad', uuid: '6' },
		{ name: 'test', uuid: '7' },
	],
	description:
		'Сироп з агави — ffffffffffffffd sd s sdssd sd s s ds ds ds s s s s s s s s s s s s s s s s ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssнайпопулярніша заправка для овочевих салатів...',
	name: 'Салад з сиропом агави',
	photo: {
		originalName: 'dsada',
		urlPath: 'https://images.lecker.de/rasanter-salat-mit-ei-und-feta,id=4dba2952,b=lecker,w=1200,rm=sk.jpeg',
	},
	uuid: 'a34b7511-f1fc-4b94-97db-465ff5c68647',
};

Story.args = {
	recipe: recipe,
};
