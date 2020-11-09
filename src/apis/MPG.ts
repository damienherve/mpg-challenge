import {axios} from '../configs/AxiosConfig';

export const fetchPlayers = async (
  key: string,
  championship: number,
  season: string,
) => {
  try {
    const response = await axios.get<Player[]>(
      '/stats/championship/' + championship + '/' + season,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchPlayerDetails = async (
  key: string,
  playerId: string,
  season: string,
) => {
  try {
    const pid = playerId.replace('player_', '');
    const response = await axios.get<PlayerDetails>(
      '/stats/player/' + pid + '?season=' + season,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
