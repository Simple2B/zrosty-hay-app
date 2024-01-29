import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { View } from 'react-native';
import { CategoryButton } from './CategoryButton';

export default {
	title: 'ui/CategoryButton',
	component: CategoryButton,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof CategoryButton>;

const Template: ComponentStory<typeof CategoryButton> = (args) => <CategoryButton />;

export const Story = Template.bind({});
