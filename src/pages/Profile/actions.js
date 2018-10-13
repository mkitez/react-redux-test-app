import axios from 'axios';
import { url } from 'constants/api';
import * as t from './actionTypes';

const receiveUser = data => {
  return {
    type: t.RECEIVE_USER,
    data
  };
}

export const fetchUser = () => {
  return (dispatch, getState) => {
    const { user, session } = getState();
    if (user.isFetching || user.data)
      return;

    dispatch({
      type: t.REQUEST_USER
    });

    if (session.user) {
      dispatch(receiveUser(session.user));
    }
    else {
      return axios.get(`${url}/users/${session.data.id}`)
        .then(
          response => dispatch(receiveUser(response.data.user)),
          error => dispatch({
            type: t.REQUEST_USER_ERROR,
            error
          })
      );
    }
  };
}
