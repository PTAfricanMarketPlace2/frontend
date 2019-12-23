import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
    
    <Header />
    <Route exact path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    </div>
  );
}



export default App;
  