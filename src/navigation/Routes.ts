export enum Screens {
  Players = 'Players',
  PlayerDetails = 'PlayerDetails',
}
export type RootStackParamList = {
  Players: {};
  PlayerDetails: {playerId: string; season: string};
};
