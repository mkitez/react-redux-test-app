import axios from 'axios';
import { url } from 'constants/api';

export const getNews = () => {
  return axios.get(`${url}/feeds`);
}