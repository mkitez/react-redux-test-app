import axios from 'axios';
import { url } from 'constants/api';

export const getUser = (userId, token) => {
  const requestParams = {
    headers: {
      'x-access-token': token || ''
    }
  };
  return axios.get(`${url}/users/${userId}`, requestParams)
    .then(response => response.data.user)
    .catch(error => error.response.data.error);
}
