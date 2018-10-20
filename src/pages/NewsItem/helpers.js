import axios from 'axios';
import { url } from 'constants/api';

export const getNewsItem = id => {
  return axios.get(`${url}/feeds/${id}`)
    .then(response => response.data.feed)
    .catch(error => error.response.data.error);
};

export const addNewsItem = (data, token) => {
  const requestParams = {
    headers: {
      'x-access-token': token || ''
    }
  };
  return axios.post(`${url}/feeds`, data, requestParams)
    .then(response => response.data.feed)
    .catch(error => error.response.data.error);
};

export const updateNewsItem = (id, data, token) => {
  const requestParams = {
    headers: {
      'x-access-token': token || ''
    }
  };
  return axios.put(`${url}/feeds/${id}`, data, requestParams)
    .then(response => response.data.feed)
    .catch(error => error.response.data.error);
};

export const deleteNewsItem = (id, token) => {
  const requestParams = {
    headers: {
      'x-access-token': token || ''
    }
  };
  return axios.delete(`${url}/feeds/${id}`, requestParams)
    .then(response => response.data._id)
    .catch(error => error.response.data.error);
};
