import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import News from './pages/News';
import NewsItem from './pages/NewsItem';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/news'>News</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/signup'>Sign Up</Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact component={News.components.NewsContainer} />
          <PrivateRoute path='/news/add' component={NewsItem.components.AddNewsItemContainer} />
          <Route path='/news/:id' exact component={NewsItem.components.NewsItemContainer} />
          <PrivateRoute path='/news/:id/edit' exact component={NewsItem.components.EditNewsItemContainer} />
          <Route path='/login' component={Login.components.LoginContainer} />
          <Route path='/signup' component={Signup.components.SignupContainer} />
          <PrivateRoute path='/profile' component={Profile.components.ProfileContainer} />
        </Switch>
        <Login.components.LoginButton />
      </div>
    );
  }
}

export default App;
