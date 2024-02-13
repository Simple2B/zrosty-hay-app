import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import { PlantingStep } from './PlantingStep';

export default {
	title: 'ui/ProgramStep',
	component: PlantingStep,
	args: {},

	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof PlantingStep>;

const Template: ComponentStory<typeof PlantingStep> = (args) => <PlantingStep {...args} />;

export const Story = Template.bind({});
Story.args = {
	day: 20,
	stepTypes: [
		{
			color: 'red',
			uuid: '1dasdasdas',
		},
		{
			color: 'blue',
			uuid: '2sdfsdfs',
		},
		{
			color: 'yellow',
			uuid: '3sdfsdfs',
		},
		{
			color: 'green',
			uuid: '4sdfsdfs',
		},
		{
			color: 'black',
			uuid: '5sdfsdfs',
		},
	],
};
