import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import MarketFeed from './components/MarketFeed';



const App = () => {
  return (
    <div className="App">
    
    <Nav />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/mfeed' component={MarketFeed} />
    </div>
  );
}



export default App;
  