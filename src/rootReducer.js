import { combineReducers } from 'redux';
import session from './pages/Login';
import user from './pages/Profile';
import news from './pages/News';
import signup from './pages/Signup';

export default combineReducers({
  session: session.reducer,
  user: user.reducer,
  news: news.reducer,
  signup: signup.reducer
});