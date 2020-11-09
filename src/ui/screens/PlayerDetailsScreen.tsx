import React from 'react';
import {RootStackParamList, Screens} from '../../navigation/RootNavigator';
import {useRoute, RouteProp} from '@react-navigation/native';
import {fetchPlayerDetails} from '../../apis/MPG';
import {useQuery} from 'react-query';
import {AxiosError} from 'axios';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

type PlayerDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  Screens.PlayerDetails
>;

const PlayerDetailsScreen = () => {
  const route = useRoute<PlayerDetailsScreenRouteProp>();

  const {isLoading, isError, data, error} = useQuery<PlayerDetails, AxiosError>(
    ['player', route.params.playerId, '2020'],
    fetchPlayerDetails,
  );

  console.log(data);

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color="#FF0000" size="large" />;
    }
    if (isError) {
      return <Text>Error: {error?.message}</Text>;
    }
    return <Text>{data?.availableSeasons.join(' ')}</Text>;
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PlayerDetailsScreen;
