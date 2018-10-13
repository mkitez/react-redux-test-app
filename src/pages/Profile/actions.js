import axios from 'axios';
import { url } from 'constants/api';
import * as t from './actionTypes';

export const fetchUser = () => {
  return (dispatch, getState) => {
    const { user, session } = getState();
    if (user.isFetching || user.data)
      return;

    dispatch({
      type: t.REQUEST_USER
    });

    const requestParams = {
      headers: {
        'x-access-token': localStorage.getItem('id_token') || ''
      }
    }
    return axios.get(`${url}/users/${session.data.id}`, requestParams)
      .then(
        response => dispatch({
          type: t.RECEIVE_USER,
          data: response.data.user
        }),
        error => dispatch({
          type: t.REQUEST_USER_ERROR,
          error
        })
    );
  };
}
