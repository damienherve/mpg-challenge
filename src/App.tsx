import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ReactQueryCacheProvider} from 'react-query';
import queryCache from './configs/ReactQueryConfig';
import {StatusBar} from 'react-native';
import RootNavigator from './navigation/RootNavigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <StatusBar barStyle="dark-content" />
          <RootNavigator />
        </ReactQueryCacheProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
