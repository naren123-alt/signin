import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import subjects from './subjects';
import schedule from './schedule';
import Login from './Login';



const Main = () => (
  <Switch>
    <Route path="/home" component={Landing} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/subjects" component={subjects} />
    <Route path="/schedule" component={schedule} />
    <Route exact path="/" component={Login} />
    
   
    

  </Switch>
)

export default Main;
