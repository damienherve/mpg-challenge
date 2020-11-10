import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Positions} from '../../common/Positions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import _ from 'lodash';

interface PlayerListItemProps {
  player: Player;
  onPress?: () => void;
}

export const ITEM_HEIGHT = 50;

export default (props: PlayerListItemProps) => {
  const {player} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress?.()}>
      <View style={styles.bigRow}>
        <Text style={styles.bold}>{player.lastname}</Text>
        <Text style={styles.small}>{player.club}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.small}>
          {Positions[player.ultraPosition].acronym}
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
          {_.round(player.stats.percentageStarter * 100)} %
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  bigRow: {
    flex: 5,
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
