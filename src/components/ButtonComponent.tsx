import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
  text: string;
  color?: string;
  colorText?: string;
  width?: boolean;
  action: (action: string) => void;
}

export const ButtonComponent = ({
  text,
  color = '#2D2D2D',
  colorText = 'white',
  width = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: colorText,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
