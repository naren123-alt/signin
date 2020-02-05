import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Landing from './components/home';


function App1() {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={ Login} />
        <Route exact path="/app" component={ Landing} />
        

      </Switch>



    </div>



  )

}


ReactDOM.render(
  <BrowserRouter>
      <App1/>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
