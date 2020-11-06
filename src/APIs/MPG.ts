import {axios} from '../Config/AxiosConfig';

export const fetchPlayers = async () => {
  const response = await axios.get('/stats/championship/1/2020');
  return response;
};
