import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Button} from 'react-native';
import {useQuery} from 'react-query';
import {fetchPlayers} from '../../APIs/MPG';
import PlayersList from '../Components/PlayersList';
import {AxiosError} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screens} from '../../Navigation/Navigator';
import {useNavigation} from '@react-navigation/native';

type PlayersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Players
>;

const PlayersScreen = () => {
  const navigation = useNavigation<PlayersScreenNavigationProp>();

  const {isLoading, isError, data, error} = useQuery<Player[], AxiosError>(
    'players',
    fetchPlayers,
  );
  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color="#FF0000" size="large" />;
    }
    if (isError) {
      return <Text>Error: {error?.message}</Text>;
    }
    return <PlayersList players={data} />;
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PlayersScreen;
