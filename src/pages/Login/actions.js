import { credentialsAreValid } from './helpers';
import * as t from './actionTypes';

export const logIn = ({ email, password }) => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({ type: t.LOG_IN });
    credentialsAreValid(email, password)
      .then(userId => {
        dispatch({
          type: t.LOG_IN_SUCCESS,
          userId
        });
        localStorage.setItem('session', userId);
      }
    )
    .catch(err => {
      dispatch({
        type: t.LOG_IN_ERROR,
        error: err.message
      });
    });
  }; 
}

export const logOut = () => {
  localStorage.removeItem('session');
  return {
    type: t.LOG_OUT
  };
}