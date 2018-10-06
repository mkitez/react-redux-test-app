import { combineReducers } from 'redux';
import session from './pages/Login';
import user from './pages/Profile';
import news from './pages/News';

export default combineReducers({
  session: session.reducer,
  user: user.reducer,
  news: news.reducer
});