import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { CategoryButton } from './CategoryButton';
import Room from '@assets/icons/category/room.svg';
import React from 'react';
import { Categorys, categories } from './CategoryButton.constans';

export default {
	title: 'ui/CategoryButton',
	component: CategoryButton,
	args: {},
	argTypes: {
		category: Categorys,
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof CategoryButton>;

const Template: ComponentStory<typeof CategoryButton> = (args) => <CategoryButton {...args} />;

export const Story = Template.bind({});
Story.args = {
	category: Categorys.room,
	SvgIcon: Room as React.FC<SvgProps>,
	onPress: (category: Categorys) => console.log(`click, ${category}`),
};
