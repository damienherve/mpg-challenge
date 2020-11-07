import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlayersScreen, PlayerDetailsScreen} from '../UI/Screens';

export enum Screens {
  Players = 'Players',
  PlayerDetails = 'PlayerDetails',
}
export type RootStackParamList = {
  Players: {};
  PlayerDetails: {playerId: string};
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Players}>
      <RootStack.Screen name={Screens.Players} component={PlayersScreen} />
      <RootStack.Screen
        name={Screens.PlayerDetails}
        component={PlayerDetailsScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
