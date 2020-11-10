import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Separator from './Separator';

interface Stat {
  label: string;
  value: string | number;
  secondValue?: string | number;
}
interface PlayerDetailsStatsListProps {
  title?: string;
  data: Stat[];
}
export default (props: PlayerDetailsStatsListProps) => {
  const {title, data} = props;

  return (
    <View style={styles.container}>
      <Separator title={title} />
      {data.map((item, index) => {
        return (
          <View
            key={item.label}
            style={[styles.item, index % 2 === 0 ? styles.row1 : styles.row2]}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
            {item.secondValue !== undefined && (
              <Text style={styles.secondValue}> ({item.secondValue})</Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingRight: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#88F',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#88F',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
  },
  row1: {
    backgroundColor: 'transparent',
  },
  row2: {
    backgroundColor: '#DDD',
  },
  label: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '100',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  secondValue: {
    fontSize: 14,
    fontWeight: '100',
  },
});
