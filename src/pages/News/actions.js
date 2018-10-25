import * as t from './actionTypes';
import { getNews } from './helpers';

export const fetchNews = () => {
  return (dispatch, getState) => {
    const { news } = getState();
    if (news.isFetching)
      return;

    dispatch({
      type: t.REQUEST_NEWS
    });

    return getNews()
      .then(
        response => dispatch({
          type: t.RECEIVE_NEWS,
          items: response.data.feeds
        }),
        error => dispatch({
          type: t.REQUEST_NEWS_ERROR,
          error: error.response.data.error
        })
    );
  };
}
