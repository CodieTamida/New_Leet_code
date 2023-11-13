import React from 'react';
import {Context} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import AppContext from './AppContext';
import App from '../App';
import ButtonLink from '../components/ButtonLink';
//import Shake from './components/Shake';

const About = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <SafeAreaView>
      <Text>Codie Tamida Leetcode Final Project</Text>
      <ButtonLink
        url={`https://docs.google.com/spreadsheets/d/1QYkedl-cMrZvkkWW4SI0Lj2q0arkyPujfpoCpo9NX_c/edit?usp=sharing`}
        title="Click Here for Project Proposal"
      />
      <Text>
        Project Proposal:
        https://docs.google.com/spreadsheets/d/1QYkedl-cMrZvkkWW4SI0Lj2q0arkyPujfpoCpo9NX_c/edit?usp=sharing
      </Text>
    </SafeAreaView>
  );
};

export default About;
