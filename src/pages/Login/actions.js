import { credentialsLogIn, googleTokenLogIn } from './helpers';
import * as jwt_decode from 'jwt-decode';
import * as t from './actionTypes';

export const logIn = ({ email, password }) => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({ type: t.LOG_IN });
    credentialsLogIn(email, password)
      .then(response => {
        const { user, token } = response.data;
        dispatch({
          type: t.LOG_IN_SUCCESS,
          data: jwt_decode(token),
          user
        });
        localStorage.setItem('id_token', token);
      }
    )
    .catch(err => {
      dispatch({
        type: t.LOG_IN_ERROR,
        error: err.error
      });
    });
  }; 
}

export const gAuth = () => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({
      type: t.LOG_IN
    });
  }
}

export const gAuthSuccess = profile => {
  return dispatch => {
    googleTokenLogIn(profile.tokenId)
      .then(response => {
        const { user, token } = response.data;
        dispatch({
          type: t.LOG_IN_SUCCESS,
          data: jwt_decode(token),
          user
        });
        localStorage.setItem('id_token', token);
      });
  };
}

export const gAuthError = error => {
  return {
    type: t.LOG_IN_ERROR,
    error
  }
}

export const logOut = () => {
  localStorage.removeItem('id_token');
  return {
    type: t.LOG_OUT
  };
}