import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import PlayerListItem, {ITEM_HEIGHT} from './PlayerListItem';
import {View, StyleSheet} from 'react-native';
import PlayerListHeader from './PlayersListHeader';

interface PlayersListProps {
  players: Player[] | undefined;
  onPlayerSelected?: (playerId: string) => void;
}

const SEPARATOR_HEIGHT = 1;

export default (props: PlayersListProps) => {
  const separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <FlatList<Player>
      ItemSeparatorComponent={separator}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT + SEPARATOR_HEIGHT,
        offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
        index,
      })}
      keyExtractor={(item) => item.id}
      data={props.players}
      ListHeaderComponent={PlayerListHeader}
      stickyHeaderIndices={[0]}
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
