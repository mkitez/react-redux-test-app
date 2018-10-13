import axios from 'axios';
import { url } from 'constants/api';
import * as jwt_decode from 'jwt-decode';

export const getDataFromStorage = () => {
  const token = localStorage.getItem('id_token');
  if (!token)
    return null;

  return jwt_decode(token);
}

export const credentialsLogIn = (username, password) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  return axios.post(`${url}/auth`, params);
}

export const googleTokenLogIn = token => {
  const params = new URLSearchParams();
  params.append('token', token);
  return axios.post(`${url}/auth/googletoken`, params);
}