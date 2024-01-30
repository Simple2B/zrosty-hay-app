import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import { SearchInput } from './SearchInput';
import React from 'react';

export default {
	title: 'ui/SearchInput',
	component: SearchInput,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Story = Template.bind({});
Story.args = {
	title: 'Шукаєш рослину?',
	placeholder: 'Знайди рослину, яка тебе цікавить тут',
};
