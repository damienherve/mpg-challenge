import React, {useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import PlayersList from '../components/PlayersList';
import {Header, Input, Item} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {usePlayers} from '../../apis/MPG';
import SeasonModal from '../components/SeasonModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash/fp';
import PositionModal from '../components/PositionModal';
import {Positions} from '../../common/Positions';

type PlayersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Players
>;

const PlayersScreen = () => {
  const [search, setSearch] = useState('');
  const [season, setSeason] = useState(2020);
  const [isSeasonModalVisible, setSeasonModalVisible] = useState(false);
  const [isPositionModalVisible, setPositionModalVisible] = useState(false);
  const [positions, setPositions] = useState<number[]>([]);
  const [championship] = useState(1);

  const {isLoading, isError, data, error} = usePlayers(championship, season);
  const navigation = useNavigation<PlayersScreenNavigationProp>();

  const filterLastname = (players?: Player[]) => {
    return players?.filter((player) => {
      return _.deburr(player.lastname)
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  };

  const filterPositions = (players?: Player[]) => {
    return players?.filter((player) => {
      return positions.length > 0
        ? positions.includes(player.ultraPosition)
        : players;
    });
  };

  const filteredData = _.compose(filterLastname, filterPositions)(data);

  const toggleSeasonModal = () => {
    setSeasonModalVisible(!isSeasonModalVisible);
  };

  const togglePositionModal = () => {
    setPositionModalVisible(!isPositionModalVisible);
  };

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color="#000055" size="large" />;
    }
    if (isError) {
      return <Text>Error: {error?.message}</Text>;
    }
    return (
      <View style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" size={20} style={styles.searchbar} />
            <Input
              placeholder="Nom du joueur"
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
          </Item>
        </Header>

        <View style={styles.filtersContainer}>
          <View style={styles.container}>
            <Icon.Button
              name="calendar-o"
              color="blue"
              backgroundColor="#EEE"
              onPress={toggleSeasonModal}>
              <Text style={styles.filteredText}>{`${season}/${
                season + 1
              }`}</Text>
            </Icon.Button>
          </View>
          <View style={styles.container}>
            <Icon.Button
              name="map-marker"
              color="blue"
              backgroundColor="#EEE"
              onPress={togglePositionModal}>
              {positions.length > 0 ? (
                <Text style={styles.filteredText}>
                  {positions
                    .map((item) => {
                      return Positions[item].acronym;
                    })
                    .join(' / ')}
                </Text>
              ) : (
                <Text style={styles.nonFilteredText}>Postes</Text>
              )}
            </Icon.Button>
          </View>
        </View>
        <PlayersList
          players={filteredData}
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
        <SeasonModal
          isVisible={isSeasonModalVisible}
          onSeasonSelected={(value) => {
            setSeason(value);
            toggleSeasonModal();
          }}
        />
        <PositionModal
          isVisible={isPositionModalVisible}
          onPositionsSelected={(value) => {
            setPositions(value);
            togglePositionModal();
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
  },
  filteredText: {
    color: '#00F',
    fontWeight: 'bold',
  },
  nonFilteredText: {
    color: '#AAA',
  },
  filtersContainer: {
    flexDirection: 'row',
  },
  searchbar: {
    marginHorizontal: 10,
  },
  searchbarInputContainer: {height: 40},
});

export default PlayersScreen;
