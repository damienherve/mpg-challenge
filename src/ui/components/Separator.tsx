import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SeparatorProps {
  title?: string;
}
export default (props: SeparatorProps) => {
  const {title} = props;
  return title === undefined ? (
    <View style={styles.line} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
