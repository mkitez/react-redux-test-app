import * as t from './actionTypes';

const initialState = {
  data: null,
  isFetching: false,
  error: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case t.REQUEST_USER:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case t.REQUEST_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case t.RECEIVE_USER:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: ''
      };
    case t.CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;