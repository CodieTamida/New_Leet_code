import React from 'react';
import {Context} from 'react';
import {Text, View} from 'react-native';
import AppContext from './AppContext';
import App from '../App';
//import Shake from './components/Shake';

const About = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <View>
      <Text>Codie Tamida Leetcode Final Project</Text>
    </View>
  );
};

export default About;
