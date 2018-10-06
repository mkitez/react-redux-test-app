import * as t from './actionTypes';

const initialState = {
  isFetching: false,
  items: [],
  error: ''
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case t.REQUEST_NEWS:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case t.REQUEST_NEWS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case t.RECEIVE_NEWS:
      return {
        ...state,
        items: action.items,
        isFetching: false,
        error: ''
      };
    default:
      return state;
  }
};

export default news;