import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';

import React from 'react';
import { Spinner } from './Spinner';

export default {
	title: 'ui/Spinner',
	component: Spinner,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Story = Template.bind({});
Story.args = {
	size: 64,
	duration: 1800,
};
