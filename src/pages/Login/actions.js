import { credentialsLogIn, googleTokenLogIn } from './helpers';
import * as loginActions from './actionTypes';
import * as profileActions from 'pages/Profile/actionTypes';

export const logIn = ({ email, password }) => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({ type: loginActions.LOG_IN });
    credentialsLogIn(email, password)
      .then(response => {
        const { token } = response.data;
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          token
        });
        localStorage.setItem('id_token', token);
      }
    )
    .catch(error => {
      dispatch({
        type: loginActions.LOG_IN_ERROR,
        error: error.response.data.error
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
        const { token } = response.data;
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          token
        });
        localStorage.setItem('id_token', token);
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