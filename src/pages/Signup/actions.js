import * as signupActions from './actionTypes';
import * as loginActions from 'pages/Login/actionTypes';
import { registerUser } from './helpers';

export const signUp = ({ email, password, captcha }) => {
  return (dispatch, getState) => {
    if (getState().signup.isLoading)
      return;

    dispatch({ type: signupActions.SIGNUP });
    registerUser(email, password, captcha)
      .then(response => {
        const { token } = response.data;
        dispatch({
          type: signupActions.SIGNUP_SUCCESS
        });
        dispatch({
          type: loginActions.LOG_IN_SUCCESS,
          token
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
