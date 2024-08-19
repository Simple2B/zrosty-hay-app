import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { View } from 'react-native';
import React from 'react';
import { SystemButton } from './SystemButton';

export default {
	title: 'ui/SystemButton',
	component: SystemButton,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof SystemButton>;

const Template: ComponentStory<typeof SystemButton> = (args) => <SystemButton {...args} />;

export const Story = Template.bind({});
Story.args = {
	onPress: () => console.log('Button pressed'),
	icon: <View style={{ width: 24, height: 24, backgroundColor: 'red' }} />,
	label: 'Button label',
};
