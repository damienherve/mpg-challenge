import {axios} from '../Config/AxiosConfig';

export const fetchPlayers = async () => {
  try {
    const response = await axios.get<Player[]>('/stats/championship/1/2020');
    return response.data;
  } catch (err) {
    throw err;
  }
};
