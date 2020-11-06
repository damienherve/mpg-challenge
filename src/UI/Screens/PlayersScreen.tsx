import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useQuery} from 'react-query';
import {fetchPlayers} from '../../APIs/MPG';
import PlayersList from '../Components/PlayersList';

const PlayersScreen = () => {
  const {isLoading, isError, data, error} = useQuery('players', fetchPlayers);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>Error: {error}</Text>;
  }

  return <PlayersList players={data?.data} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayersScreen;
