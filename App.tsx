/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import data from './src/countries';
import CountryList from './src/CountryList';


const App = () => {

  const [winner, setWinner] = React.useState(null);

  return (
    <SafeAreaView style={{flex : 1, backgroundColor : '#EEE'}}>
      <Text style={{fontSize : 18, textAlign : 'center', paddingVertical : 20}}>
        Choose the winner of the next CAN tournament
      </Text>
      <CountryList list={data}  select={setWinner} winner={winner} />

      {winner && 
        <Text style={{fontSize : 18, textAlign : 'center', paddingVertical : 20}}>
          {winner.name} will win the tournament
        </Text>
      }

    </SafeAreaView>
  );
};


export default App;
