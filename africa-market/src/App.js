import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import MarketFeed from './components/MarketFeed';
import PrivateRoute from './components/PrivateRoute';

const App = (props) => {
  return (
    <div className='App'>
      <Nav />
      <Route exact path='/login' component={Login} {...props}/>
      <Route exact path='/signup' component={Signup} {...props}  />
      <PrivateRoute path='/dashboard' component={Dashboard} {...props}  />
      <PrivateRoute path='/mfeed' component={MarketFeed} {...props} />
    </div>
  );
};

export default withRouter(App);
