import * as t from './actionTypes';

const initialState = {
  isLoading: false,
  error: ''
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case t.SIGNUP:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case t.SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default signup;