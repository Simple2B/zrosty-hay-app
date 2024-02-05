import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { PlantPhotoSwiper } from './PlantPhotoSwiper';
import { View } from 'react-native';

export default {
	title: 'ui/PlantPhotoSwiper',
	component: PlantPhotoSwiper,
	args: {},

	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof PlantPhotoSwiper>;

const Template: ComponentStory<typeof PlantPhotoSwiper> = () => <PlantPhotoSwiper  />;

const plantPhotos = [
	{
		urlPath: 'https://i.pinimg.com/564x/14/b9/83/14b9837af48f841964336ecad2f8b064.jpg',
		originalName: 'raspberry_in_bush.jpg',
	},
	{
		urlPath: 'https://i.pinimg.com/564x/f9/87/99/f98799d4feb32e35c77d4d344625aa9c.jpg',
		originalName: 'raspberry.jpg',
	},
	{
		urlPath: 'https://i.pinimg.com/564x/2a/a2/67/2aa267488883a202c088f741443e13d0.jpg',
		originalName: 'raspberry_close.jpg',
	},
	{
		urlPath: 'https://i.pinimg.com/564x/49/2c/6b/492c6b15184c213107b39fccebb33997.jpg',
		originalName: 'raspberry_blossom.jpg',
	},
];

export const Story = Template.bind({});
Story.args = { plantPhotos };
