import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigRow}>
        <Text style={styles.bold}>Joueur</Text>
      </View>
      <View style={styles.smallRow}>
        <Icon name="map-marker" size={20} color="#888" />
      </View>
      <View style={styles.smallRow}>
        <Icon name="star-half-o" size={20} color="#888" />
      </View>
      <View style={styles.smallRow}>
        <Icon name="soccer-ball-o" size={20} color="#888" />
      </View>
      <View style={styles.smallRow}>
        <Icon name="money" size={20} color="#888" />
      </View>
      <View style={styles.smallRow}>
        <Icon name="street-view" size={20} color="#888" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#DDDDE0',
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
    color: '#888',
  },
  small: {
    fontSize: 12,
  },
});
