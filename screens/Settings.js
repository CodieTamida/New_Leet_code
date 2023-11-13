import React from 'react';
import AppContext from './AppContext';
import {View, Text} from 'react-native';

const Settings = () => {
  const context = React.useContext(AppContext);
  return (
    <View>
      <Text>This is the Settings screen</Text>
    </View>
  );
};

export default Settings;
