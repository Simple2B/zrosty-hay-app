import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import React from 'react';
import { FormInput } from './FormInput';

export default {
	title: 'ui/FormInput',
	component: FormInput,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Story = Template.bind({});
Story.args = {
	label: 'Username',
	defaultValue: 'John Doe',
	placeholder: 'Enter your username',
	onChange: (text) => console.log(text),
};
