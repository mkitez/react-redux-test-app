import { combineReducers } from 'redux';
import session from './pages/Login';
import user from './pages/Profile';
import news from './pages/News';
import newsItem from './pages/NewsItem';
import signup from './pages/Signup';

export default combineReducers({
  session: session.reducer,
  user: user.reducer,
  news: news.reducer,
  newsItem: newsItem.reducer,
  signup: signup.reducer
});