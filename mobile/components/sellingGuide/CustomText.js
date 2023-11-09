import React from 'react';
import { Text, Linking } from 'react-native';

const CustomText = ({ children, style, onPress, link }) => {
  return (
    <Text
      style={[style, { color: 'blue', textDecorationLine: 'underline' }]}
      onPress={() => Linking.openURL(link)}
    >
      {children}
    </Text>
  );
};

export default CustomText;
