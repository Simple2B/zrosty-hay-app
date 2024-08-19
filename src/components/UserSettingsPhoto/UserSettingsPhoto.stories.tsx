import React from 'react';
import { View } from 'react-native';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { UserSettingsPhoto } from './UserSettingsPhoto';

export default {
	title: 'ui/UserSettingsPhoto',
	component: UserSettingsPhoto,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof UserSettingsPhoto>;

const Template: ComponentStory<typeof UserSettingsPhoto> = (args) => <UserSettingsPhoto {...args} />;

export const Story = Template.bind({});
Story.args = { photoUrl: 'https://i.pinimg.com/564x/97/ee/00/97ee007b737dd5836182981f3101d80b.jpg' };
