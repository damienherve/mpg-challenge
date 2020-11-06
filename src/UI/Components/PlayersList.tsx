import React from 'react';
import {FlatList, TouchableHighlight, View, Text} from 'react-native';

const PlayersList = (props) => {
  return (
    <FlatList
      data={props.players}
      renderItem={({item, separators}) => (
        <TouchableHighlight
          key={item.key}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View style={{backgroundColor: 'white'}}>
            <Text>{item.lastname}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default PlayersList;
