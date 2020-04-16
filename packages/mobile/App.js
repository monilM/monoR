/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
// Imports: Screens
import Counter from './src/screens/Counter';
// Imports: Redux Store
import {initializeStore} from './src/reduxStore/store/initializestore';
import sharedCode from '@monorepo/components';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={initializeStore}>
        <Counter />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  highlight: {
    fontWeight: '700',
  },
});

export default App;
