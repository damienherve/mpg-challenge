import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlayersScreen, PlayerDetailsScreen} from '../ui/screens';
import {RootStackParamList, Screens} from './Routes';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Players}>
      <RootStack.Screen
        name={Screens.Players}
        component={PlayersScreen}
        options={{title: 'Joueurs'}}
      />
      <RootStack.Screen
        name={Screens.PlayerDetails}
        component={PlayerDetailsScreen}
        options={{title: 'Detail du joueur'}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
