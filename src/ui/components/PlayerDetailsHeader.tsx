import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Positions} from '../../common/Positions';

interface PlayerDetailsHeaderProps {
  player: Player;
}
export default (props: PlayerDetailsHeaderProps) => {
  const {player} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <Icon name="shirt-sharp" size={80} />
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.textBig}>
          {player.firstname !== null
            ? player.firstname + ' ' + player.lastname
            : player.lastname}
        </Text>
        <Text style={styles.textNormal}>
          {Positions[player.ultraPosition].fullname}
        </Text>
        <Text style={styles.textNormal}>{player.club}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textBig: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textNormal: {
    fontSize: 12,
  },
});
