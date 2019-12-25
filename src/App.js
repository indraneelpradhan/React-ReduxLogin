import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Signin  from './container/Login/Signin';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route path='' exact component= {Signin}/>
      </Router>
    </Provider>
  );
}

export default App;
