import * as jwt_decode from 'jwt-decode';
import * as signupActions from './actionTypes';
import * as loginActions from 'pages/Login/actionTypes';
import * as profileActions from 'pages/Profile/actionTypes';
import { registerUser } from './helpers';

export const signUp = ({ email, password, captcha }) => {
  return (dispatch, getState) => {
    if (getState().signup.isLoading)
      return;

    dispatch({ type: signupActions.SIGNUP });
    registerUser(email, password, captcha)
      .then(response => {
        const { user, token } = response.data;
        dispatch({
          type: signupActions.SIGNUP_SUCCESS
        });
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          data: jwt_decode(token)
        });
        dispatch({
          type: profileActions.RECEIVE_USER,
          data: user
        });
        localStorage.setItem('id_token', token);
      }
    )
    .catch(err => {
      dispatch({
        type: signupActions.SIGNUP_ERROR,
        error: err.error
      });
    });
  }; 
}
