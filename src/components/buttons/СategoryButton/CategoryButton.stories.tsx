import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import { CategoryButton } from './CategoryButton';
import React from 'react';


export default {
	title: 'ui/CategoryButton',
	component: CategoryButton,
	args: {},
	argTypes: {
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
};
