import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppContext from './AppContext';
import ButtonLink from '../components/ButtonLink';
import Shake from '../components/Shake';
//import problemslist from '../assets/fonts/problemslist.json';

const Leet = ({navigation}) => {
  const context = useContext(AppContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://leetcode-api.p.rapidapi.com/leetcode/todays-question';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf438a3c68msh9b495a43427b9b4p15696djsnbf65e85a01f6',
      'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setData(json.data.activeDailyCodingChallengeQuestion);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }
  return (
    <View>
      <ButtonLink
        style={styles.button}
        url={`https://leetcode.com${data.link}`}
        title="Open LeetCode"
      />
      <Shake />
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
};

export default Leet;
