import React from 'react';
import {View, TouchableOpacity, Text, Linking} from 'react-native';

const ButtonLink = ({url, title}) => {
  const handlePress = () => {
    Linking.openURL(url).catch(err => console.error('Sometin wrong', err));
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLink;
