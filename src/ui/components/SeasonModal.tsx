import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export interface SeasonModalProps {
  onSeasonSelected?: (season: string) => void;
  availableSeasons?: string[];
  isVisible: boolean;
}

export default (props: SeasonModalProps) => {
  const {availableSeasons, onSeasonSelected, isVisible} = props;
  const seasons = availableSeasons?.sort() ?? ['2017', '2018', '2019', '2020'];
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        {seasons.map((item) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => {
                onSeasonSelected?.(item);
              }}>
              <Text style={styles.text}>
                {item}/{parseInt(item, 10) + 1}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
});
