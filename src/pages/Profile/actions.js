import * as t from './actionTypes';
import { getUser } from './helpers';

export const fetchUser = () => {
  return (dispatch, getState) => {
    const { user, session } = getState();
    if (user.isFetching)
      return;

    dispatch({
      type: t.REQUEST_USER
    });

    return getUser(session.data.id, session.data.token)
      .then(
        user => dispatch({
          type: t.RECEIVE_USER,
          data: user
        }),
        error => dispatch({
          type: t.REQUEST_USER_ERROR,
          error
        })
    );
  };
}
