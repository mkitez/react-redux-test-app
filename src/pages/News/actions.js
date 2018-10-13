import axios from 'axios';
import { url } from 'constants/api';
import * as t from './actionTypes';

const requestNews = () => {
  return {
    type: t.REQUEST_NEWS
  };
}

const requestNewsError = (error) => {
  return {
    type: t.REQUEST_NEWS_ERROR,
    error
  };
}

const receiveNews = (items) => {
  return {
    type: t.RECEIVE_NEWS,
    items
  };
}

const fetchNews = () => {
  return dispatch => {
    dispatch(requestNews());
    return axios.get(`${url}/feeds`)
      .then(
        response => dispatch(receiveNews(response.data.feeds)),
        error => dispatch(requestNewsError(error))
      );
  };
}

const shouldFetchNews = state => {
  if (state.news.isFetching || state.news.items.length)
    return false;
  else
    return true;
}

export const fetchNewsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState()))
      return dispatch(fetchNews());
    else
      return Promise.resolve();
  };
}