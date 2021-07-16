import React from 'react';
import './App.scss';
import LogIn from './Components/Login';
import LogUp from './Components/LogUp';
import Home from './Components/Home';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/logup' component={LogUp}/>
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
