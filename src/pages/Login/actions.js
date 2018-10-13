import { credentialsLogIn, googleTokenLogIn } from './helpers';
import * as jwt_decode from 'jwt-decode';
import * as loginActions from './actionTypes';
import * as profileActions from 'pages/Profile/actionTypes';

export const logIn = ({ email, password }) => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({ type: loginActions.LOG_IN });
    credentialsLogIn(email, password)
      .then(response => {
        const { user, token } = response.data;
        localStorage.setItem('id_token', token);
        dispatch({
          type: profileActions.RECEIVE_USER,
          data: user
        });
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          data: jwt_decode(token),
        });
      }
    )
    .catch(err => {
      dispatch({
        type: loginActions.LOG_IN_ERROR,
        error: err.error.response.data
      });
    });
  }; 
}

export const gAuth = () => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({
      type: loginActions.LOG_IN
    });
  }
}

export const gAuthSuccess = profile => {
  return dispatch => {
    googleTokenLogIn(profile.tokenId)
      .then(response => {
        const { user, token } = response.data;
        localStorage.setItem('id_token', token);
        dispatch({
          type: profileActions.RECEIVE_USER,
          data: user
        });
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          data: jwt_decode(token),
        });
      });
  };
}

export const gAuthError = error => {
  return {
    type: loginActions.LOG_IN_ERROR,
    error
  }
}

export const logOut = () => {
  return dispatch => {
    localStorage.removeItem('id_token');
    dispatch({
      type: loginActions.LOG_OUT
    });
    dispatch({
      type: profileActions.CLEAR_USER
    });
  }
}