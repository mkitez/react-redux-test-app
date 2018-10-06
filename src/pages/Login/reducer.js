import { getAuthorizedUser } from './helpers';
import * as t from './actionTypes';

const initialState = {
  userId: getAuthorizedUser(),
  isLoading: false,
  error: ''
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case t.LOG_IN:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case t.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.userId,
        error: ''
      };
    case t.LOG_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case t.LOG_OUT:
      return {
        ...state,
        userId: null,
        isLoading: false,
        error: ''
      };
    default:
      return state;
  }
};

export default session;