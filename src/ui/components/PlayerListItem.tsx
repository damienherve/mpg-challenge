import React from 'react';
import {View, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import {positionName} from '../../common/Utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PlayerListItemProps extends TouchableOpacityProps {
  player: Player;
}

export default (props: PlayerListItemProps) => {
  const {player} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bigRow}>
        <Text style={styles.bold}>{player.lastname}</Text>
        <Text style={styles.small}>{player.club}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.small}>
          {positionName(player.ultraPosition)[1]}
        </Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.small}>{player.stats.avgRate}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.small}>{player.stats.sumGoals}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.small}>{player.quotation}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={[styles.bold, styles.small]}>
          {player.stats.percentageStarter * 100} %
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  bigRow: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  smallRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
  },
});
