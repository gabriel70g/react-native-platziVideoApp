/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList'

const App: () => React$Node = () => {
  return (
    <>
      <Home>
        <Header />
        <Text>hola</Text>

        <SuggestionList />
      </Home>
    </>
  );
};

export default App;
