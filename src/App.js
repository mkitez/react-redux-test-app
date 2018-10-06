import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
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
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News.components.NewsContainer} />
          <Route path='/login' component={Login.components.LoginContainer} />
          <PrivateRoute path='/profile' component={Profile.components.ProfileContainer} />
        </Switch>
        <Login.components.LoginButton />
      </div>
    );
  }
}

export default App;
