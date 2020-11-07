import React from 'react';
import {ListItem} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

interface PlayersListProps {
  players: Player[] | undefined;
  onPlayerSelected?: (playerId: string) => void;
}

const PlayersList = (props: PlayersListProps) => {
  return (
    <FlatList<Player>
      data={props.players}
      renderItem={({item}) => {
        return (
          <ListItem
            key={item.id}
            bottomDivider
            onPress={() => {
              props.onPlayerSelected?.(item.id);
            }}>
            <ListItem.Content>
              <ListItem.Title>{item.lastname}</ListItem.Title>
              <ListItem.Subtitle>{item.club}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      }}
    />
  );
};

export default PlayersList;
