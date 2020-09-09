import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Friends from './components/Friends';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <Router>    
        <div className="App">
          <h1>
            Welcome to the Friends App
          </h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/friendForm'>Add Friend</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path='/friends' component={Friends} />
            <Route path='/login' component={Login} />
            <Route path ='/friendForm' component={FriendForm} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;
