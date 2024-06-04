import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import { RecipeIngredient } from './RecipeIngredient';
import React from 'react';

export default {
	title: 'ui/RecipeIngredient',
	component: RecipeIngredient,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof RecipeIngredient>;

const Template: ComponentStory<typeof RecipeIngredient> = (args) => <RecipeIngredient {...args} />;

export const Story = Template.bind({});
Story.args = {
	ingredient: {
		uuid: "1",
		name: 'Листя салату',
		photo: {
			urlPath: 'https://i.pinimg.com/564x/49/2c/6b/492c6b15184c213107b39fccebb33997.jpg',
			originalName: 'raspberry_blossom.jpg',
		},
		quantity: 200,
		quantityType: 'kg',
	},
};
