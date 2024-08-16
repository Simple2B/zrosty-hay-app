import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { View } from 'react-native';
import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { UserPreferredLanguage } from '@src/api/model/userPreferredLanguage';

export default {
	title: 'ui/LanguageSelector',
	component: LanguageSelector,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
} as ComponentMeta<typeof LanguageSelector>;

const Template: ComponentStory<typeof LanguageSelector> = (args) => <LanguageSelector {...args} />;

export const Story = Template.bind({});
Story.args = { language: UserPreferredLanguage.ua };
