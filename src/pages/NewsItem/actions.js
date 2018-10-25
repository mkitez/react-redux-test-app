import * as t from './actionTypes';
import { addNewsItem, updateNewsItem, getNewsItem, deleteNewsItem } from './helpers';

export const getItem = id => {
  return (dispatch, getState) => {
    const { newsItem } = getState();
    if (newsItem.isLoading)
      return;

    dispatch({
      type: t.NEWS_ITEM_ACTION
    });

    return getNewsItem(id)
      .then(data => dispatch({
          type: t.NEWS_ITEM_ACTION_SUCCESS,
          data
        })
      )
      .catch(error => dispatch({
          type: t.NEWS_ITEM_ACTION_ERROR,
          error: error.message
        })
      );
  };
}

export const addItem = (title, content, cb) => {
  return (dispatch, getState) => {
    const { newsItem, session } = getState();
    if (newsItem.isLoading)
      return;

    dispatch({
      type: t.NEWS_ITEM_ACTION
    });

    return addNewsItem({ title, content }, session.data.token)
      .then(data => {
        dispatch({
          type: t.NEWS_ITEM_ACTION_SUCCESS,
          data
        });
        cb(data._id);
      })
      .catch(error => dispatch({
          type: t.NEWS_ITEM_ACTION_ERROR,
          error: error.message
        })
      );
  };
}

export const updateItem = (id, title, content, cb) => {
  return (dispatch, getState) => {
    const { newsItem, session } = getState();
    if (newsItem.isLoading)
      return;

    dispatch({
      type: t.NEWS_ITEM_ACTION
    });

    return updateNewsItem(id, { title, content }, session.data.token)
      .then(data => {
        dispatch({
          type: t.NEWS_ITEM_ACTION_SUCCESS,
          data
        });
        cb();
      })
      .catch(error => dispatch({
          type: t.NEWS_ITEM_ACTION_ERROR,
          error: error.message
        })
      );
  };
}

export const deleteItem = (id, cb) => {
  return (dispatch, getState) => {
    const { newsItem, session } = getState();
    if (newsItem.isLoading)
      return;

    dispatch({
      type: t.NEWS_ITEM_ACTION
    });

    return deleteNewsItem(id, session.data.token)
      .then(() => {
        dispatch({
          type: t.NEWS_ITEM_ACTION_SUCCESS,
          data: null
        });
        cb();
      })
      .catch(error => dispatch({
          type: t.NEWS_ITEM_ACTION_ERROR,
          error: error.message
        })
      );
  };
}
