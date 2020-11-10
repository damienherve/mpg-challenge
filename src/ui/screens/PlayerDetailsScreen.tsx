import React from 'react';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {usePlayerDetails} from '../../apis/MPG';

type PlayerDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  Screens.PlayerDetails
>;

const PlayerDetailsScreen = () => {
  const route = useRoute<PlayerDetailsScreenRouteProp>();

  const {isLoading, isError, data, error} = usePlayerDetails(
    route.params.playerId,
    route.params.season,
  );

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
