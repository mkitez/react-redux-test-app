import { LOG_OUT, LOG_IN_ERROR } from 'pages/Login/actionTypes';
import { CLEAR_USER } from 'pages/Profile/actionTypes';

const tokenExpirationMiddleware = store => next => action => {
  const sessionData = store.getState().session.data;
  if (sessionData && sessionData.exp < Math.floor(Date.now() / 1000)) {
    localStorage.removeItem('id_token');
    next({ type: LOG_OUT });
    next({ type: LOG_IN_ERROR, error: 'Your token has expired' });
    next({ type: CLEAR_USER });
  }
  next(action);
};

export default tokenExpirationMiddleware;
