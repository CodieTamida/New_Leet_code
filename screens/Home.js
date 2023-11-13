import React from 'react';

import AppContext from './AppContext';
import {View, Text, Button} from 'react-native';
const Home = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <View>
      <Text>This is the Home screen</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}></Button>

      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}></Button>

      <Button
        title=" Lets LeetCode"
        onPress={() => navigation.navigate('Leet')}></Button>
    </View>
  );
};

export default Home;
