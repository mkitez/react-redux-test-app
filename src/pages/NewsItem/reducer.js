import * as t from './actionTypes';

const initialState = {
  isLoading: false,
  data: null,
  error: ''
};

const newsItem = (state = initialState, action) => {
  switch (action.type) {
    case t.NEWS_ITEM_ACTION:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: ''
      };
    case t.NEWS_ITEM_ACTION_SUCCESS:
     return {
       ...state,
       isLoading: false,
       data: action.data,
       error: ''
     };
    case t.NEWS_ITEM_ACTION_ERROR:
     return {
      ...state,
      isLoading: false,
      error: action.error
     };
    default:
      return state;
  }
}

export default newsItem;
