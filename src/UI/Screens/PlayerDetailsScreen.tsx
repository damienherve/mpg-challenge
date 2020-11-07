import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screens} from '../../Navigation/Navigator';
import {useNavigation} from '@react-navigation/native';

type PlayerDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.PlayerDetails
>;

type PlayerDetailsScreenProps = {
  playerId: string;
};

const PlayerDetailsScreen = (props: PlayerDetailsScreenProps) => {
  const navigation = useNavigation<PlayerDetailsScreenNavigationProp>();
  return null;
};

export default PlayerDetailsScreen;
