import React, {useState} from 'react';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {usePlayerDetails} from '../../apis/MPG';
import PlayerDetailsHeader from '../components/PlayerDetailsHeader';
import PlayerDetailsStats from '../components/PlayerDetailsStats';
import {ScrollView} from 'react-native-gesture-handler';
import PlayerDetailsStatsList from '../components/PlayerDetailsStatsList';
import StatExtractor from '../../common/StatExtractor';
import Icon from 'react-native-vector-icons/FontAwesome';
import SeasonModal from '../components/SeasonModal';

type PlayerDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  Screens.PlayerDetails
>;

const PlayerDetailsScreen = () => {
  const route = useRoute<PlayerDetailsScreenRouteProp>();

  const [season, setSeason] = useState(route.params.season);
  const [isSeasonModalVisible, setSeasonModalVisible] = useState(false);

  const {isLoading, isError, data, error} = usePlayerDetails(
    route.params.playerId,
    season,
  );

  const isGoalkeeper = data?.ultraPosition === 10;

  const toggleSeasonModal = () => {
    setSeasonModalVisible(!isSeasonModalVisible);
  };

  return isLoading ? (
    <ActivityIndicator color="#00F" size="large" />
  ) : isError || !data ? (
    <Text>Error: {error?.message}</Text>
  ) : (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <PlayerDetailsHeader player={data} />
        <PlayerDetailsStats player={data} isGoalkeeper />
        <Icon.Button
          style={styles.seasonButton}
          name="calendar-o"
          color="blue"
          backgroundColor="#EEE"
          onPress={toggleSeasonModal}>
          <Text>
            {season}/{parseInt(season, 10) + 1}
          </Text>
        </Icon.Button>
        <PlayerDetailsStatsList
          title="Efficace ?"
          data={StatExtractor.getEfficiencyStats(data.stats, isGoalkeeper)}
        />
        {!isGoalkeeper && (
          <View>
            <PlayerDetailsStatsList
              title="Il plante ?"
              data={StatExtractor.getAttackStats(data.stats)}
            />
            <PlayerDetailsStatsList
              title="Solide ?"
              data={StatExtractor.getDefStats(data.stats)}
            />
            <PlayerDetailsStatsList
              title="Un as de la passe ?"
              data={StatExtractor.getPassStats(data.stats)}
            />
          </View>
        )}
        <SeasonModal
          isVisible={isSeasonModalVisible}
          availableSeasons={data.availableSeasons}
          onSeasonSelected={(value) => {
            setSeason(value);
            toggleSeasonModal();
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seasonButton: {
    justifyContent: 'center',
  },
});

export default PlayerDetailsScreen;
