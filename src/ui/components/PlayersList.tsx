import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import PlayerListItem from './PlayerListItem';
import {View, StyleSheet} from 'react-native';

interface PlayersListProps {
  players: Player[] | undefined;
  onPlayerSelected?: (playerId: string) => void;
}

export default (props: PlayersListProps) => {
  const separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <FlatList<Player>
      ItemSeparatorComponent={separator}
      data={props.players}
      renderItem={({item}) => {
        return (
          <PlayerListItem
            player={item}
            onPress={() => {
              props.onPlayerSelected?.(item.id);
            }}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
});
