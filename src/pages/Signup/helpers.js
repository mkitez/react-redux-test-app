import axios from 'axios';
import { url } from 'constants/api';

export const registerUser = (username, password, captcha) => {
  return axios.post(`${url}/users`, { 
    username,
    password,
    'g-recaptcha-response': captcha
  });
}