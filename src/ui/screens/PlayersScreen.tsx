import React, {useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {useQuery} from 'react-query';
import {fetchPlayers} from '../../apis/MPG';
import PlayersList from '../components/PlayersList';
import {AxiosError} from 'axios';
import {SearchBar} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screens} from '../../navigation/RootNavigator';
import {useNavigation} from '@react-navigation/native';

type PlayersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Players
>;

const PlayersScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<PlayersScreenNavigationProp>();
  const championship = 1;
  const season = '2020';

  const {isLoading, isError, data, error} = useQuery<Player[], AxiosError>(
    ['players', championship, season],
    fetchPlayers,
  );
  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color="#FF0000" size="large" />;
    }
    if (isError) {
      return <Text>Error: {error?.message}</Text>;
    }
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Nom du joueur..."
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <PlayersList
          players={data?.filter((player) => {
            return player.lastname.toLowerCase().includes(search.toLowerCase());
          })}
          onPlayerSelected={(playerId) => {
            navigation.navigate({
              key: Screens.PlayerDetails,
              name: Screens.PlayerDetails,
              params: {
                playerId,
                season,
              },
            });
          }}
        />
      </View>
    );
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
