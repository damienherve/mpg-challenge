import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PlayerDetailsStatsProps {
  player: PlayerDetails;
  isGoalkeeper: boolean;
}
export default (props: PlayerDetailsStatsProps) => {
  const {player, isGoalkeeper} = props;
  const {stats} = player;

  const renderStat = (
    label: string,
    firstValue?: string | number,
    secondValue?: string | number,
    yellowAndRedCards = false,
  ) => {
    return (
      <View style={styles.statContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.numberContainer}>
          {firstValue !== undefined && (
            <Text style={yellowAndRedCards ? styles.redCard : styles.bigValue}>
              {firstValue}
            </Text>
          )}
          {secondValue !== undefined && (
            <Text
              style={yellowAndRedCards ? styles.yellowCard : styles.smallValue}>
              {secondValue}
            </Text>
          )}
        </View>
      </View>
    );
  };

  console.log('GC: ' + isGoalkeeper);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.column}>
        {renderStat('Note moyenne', stats.avgRate)}
        {renderStat(
          'Titulaire (remp.)',
          stats.appearances.starter,
          stats.appearances.standIn,
        )}
        {isGoalkeeper
          ? renderStat('% Sauvés', stats.percentageSaveShot)
          : renderStat('Passes dé.', stats.sumGoalAssist)}
      </View>
      <View style={styles.column}>
        {isGoalkeeper
          ? renderStat('Clean Sheet', stats.sumCleanSheet)
          : renderStat('Buts (pén.)', stats.sumGoals, stats.sumPenalties)}
        {renderStat('Cote', player.quotation)}
        {renderStat('Cartons', stats.sumRedCard, stats.sumYellowCard, true)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  statContainer: {
    padding: 10,
  },
  numberContainer: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '100',
  },
  bigValue: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  smallValue: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  redCard: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#A00',
    width: 15,
    margin: 5,
  },
  yellowCard: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#FB0',
    width: 15,
    margin: 5,
  },
});
