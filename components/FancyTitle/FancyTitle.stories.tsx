import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { FancyTitle } from './FancyTitle';

export default {
	title: 'CustomComponents/FancyTitle',
	component: FancyTitle,
	args: {},
	argTypes: {
		onPress: { action: 'clicked' },
	},
} as ComponentMeta<typeof FancyTitle>;

const Template: ComponentStory<typeof FancyTitle> = (args) => <FancyTitle {...args} />;

export const Story = Template.bind({});
Story.args = {
	text: 'Hello World',
};

export const Small = Template.bind({});
Small.args = {
	text: 'Hi Maryna!',
	size: 'small',
};
