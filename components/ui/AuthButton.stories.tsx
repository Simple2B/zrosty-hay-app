import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { AuthButton } from './AuthButton';
import { View } from 'react-native';

export default {
  title: 'ui/AuthButton',
  component: AuthButton,
  args: {},
  argTypes: {
    onPress: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof AuthButton>;

const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Story = Template.bind({});
Story.args = {
  text: 'Google',
};

// export const Small = Template.bind({});
// Small.args = {
//   text: 'Hi Maryna!',
// };
