import React , { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from './components/login';
import Dashboard from './components/dashboard';
import Wizard1 from './components/wizard1';
import Wizard2 from './components/wizard2';
import Wizard3 from './components/wizard3';
import Wizard4 from './components/wizard4';
import Wizard5 from './components/wizard5';

class Routes extends Component {
  render (){
      // console.log(55555,this.props)
      return(
        <div className="content">
            <Switch>
              <Route exact component={ Login } path="/"  />
              <Route component={ Dashboard } path="/dashboard" />
              <Route component={ Wizard1 } path="/wizard/1" />
              <Route component={ Wizard2 } path="/wizard/2" />
              <Route component={ Wizard3 } path="/wizard/3" />
              <Route component={ Wizard4 } path="/wizard/4" />
              <Route component={ Wizard5 } path="/wizard/5" />
            </Switch>
        </div>
        )
    }
};

export default Routes;