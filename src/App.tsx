import React from 'react';
import {ReactQueryCacheProvider, useQuery} from 'react-query';
import queryCache from './Config/ReactQueryConfig';

import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlayersList from './UI/Components/PlayersList';
import PlayersScreen from './UI/Screens/PlayersScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <StatusBar barStyle="dark-content" />
        <PlayersScreen />
      </ReactQueryCacheProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
