import React from 'react';
import { Button, TouchableOpacity, View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type AuthButtonProps = {
  text: string;
  type: 'google' | 'apply' | 'facebook';
  onPress: (title: string) => void;
};

export const AuthButton = ({ text, type, onPress }: AuthButtonProps) => {
  const { styles } = useStyles(styleSheet);
  const handlePress = () => {
    onPress(text);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.text}>Увійти з {text}</Text>
    </TouchableOpacity>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    height: 56,
    width: '80%',
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
}));
