import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Positions} from '../../common/Positions';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

export interface PositionModalProps {
  onPositionsSelected?: (positions: number[]) => void;
  isVisible: boolean;
}

export default (props: PositionModalProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelected = (id: number) => {
    if (selected.includes(id)) {
      setSelected(_.without(selected, id));
    } else {
      setSelected(selected.concat(id));
    }
  };

  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.modal}>
        {Object.values(Positions).map((position) => {
          return (
            <View style={styles.itemContainer} key={position.id}>
              <TouchableOpacity
                onPress={() => {
                  toggleSelected(position.id);
                }}>
                <Text
                  style={[
                    styles.text,
                    selected.includes(position.id) && styles.selected,
                  ]}>
                  {position.fullname}
                </Text>
              </TouchableOpacity>
              {selected.includes(position.id) && (
                <Icon name="check" color="green" />
              )}
            </View>
          );
        })}
        <Button
          title="Valider"
          onPress={() => {
            props.onPositionsSelected?.(selected);
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    color: 'green',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
});
