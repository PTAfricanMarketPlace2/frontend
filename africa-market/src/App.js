import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';


const App = () => {
  return (
    <div className="App">
    
    <Header />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route path='/dashboard' component={Dashboard} />
    </div>
  );
}



export default App;
  