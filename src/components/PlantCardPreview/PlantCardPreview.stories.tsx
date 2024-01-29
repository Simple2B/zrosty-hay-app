import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { PlantCardPreview } from './PlantCardPreview';
import { View } from 'react-native';
import { CareType } from '@src/api/model';

export default {
	title: 'ui/PlantCardPreview',
	component: PlantCardPreview,
	args: {},

	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof PlantCardPreview>;

const Template: ComponentStory<typeof PlantCardPreview> = (args) => <PlantCardPreview {...args} />;

const plantInfo = {
	uuid: '1',
	name: 'Monstera',
	isSunLoving: true,
	minSize: 20,
	maxSize: 30,
	photo: {
		urlPath:
			'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Monstera-Deliciosa_Medium_Isabella_Aqua_Variant.jpg?v=1697816323',
		originalName: 'monstera.jpg',
	},
	minTemperature: 20,
	maxTemperature: 30,
	careType: CareType.easy,
	watering: CareType.normal,
};

export const Story = Template.bind({});
Story.args = { plantInfo };
