import React from 'react';
import {FlatList, TouchableHighlight, View, Text} from 'react-native';

interface PlayersListProps {
  players: Player[] | undefined;
}

const PlayersList = (props: PlayersListProps) => {
  return (
    <FlatList
      data={props.players}
      renderItem={({item, separators}) => (
        <TouchableHighlight
          key={item.id}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View>
            <Text>{item.lastname}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default PlayersList;
