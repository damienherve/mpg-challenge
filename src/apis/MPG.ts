import {AxiosError} from 'axios';
import {useQuery} from 'react-query';
import {axiosInstance} from '../configs/AxiosConfig';

const fetchPlayers = async (
  key: string,
  championship: number,
  season: string,
) => {
  try {
    const response = await axiosInstance.get<Player[]>(
      '/stats/championship/' + championship + '/' + season,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const fetchPlayerDetails = async (
  key: string,
  playerId: string,
  season: string,
) => {
  try {
    const pid = playerId.replace('player_', '');
    const response = await axiosInstance.get<PlayerDetails>(
      '/stats/player/' + pid + '?season=' + season,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

/******** Queries *********/

export const usePlayers = (championship: number, season: string) =>
  useQuery<Player[], AxiosError>(
    ['players', championship, season],
    fetchPlayers,
  );

export const usePlayerDetails = (playerId: string, season: string) =>
  useQuery<PlayerDetails, AxiosError>(
    ['player', playerId, season],
    fetchPlayerDetails,
  );
