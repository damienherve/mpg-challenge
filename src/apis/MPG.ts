import {axios} from '../configs/AxiosConfig';

export const fetchPlayers = async () => {
  try {
    const response = await axios.get<Player[]>('/stats/championship/1/2020');
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchPlayerDetails = async (key: string, playerId: string) => {
  try {
    const pid = playerId.replace('player_', '');
    console.log(playerId);
    const response = await axios.get<PlayerDetails>(
      '/stats/player/' + pid + '?season=2018',
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
