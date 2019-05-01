import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Drawer from './Component/Drawer';
// import Profile from './Component/Profile';
import MyProfile from './Page/Myprofile';
import Dashboard from './Page/Dashboard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Drawer>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={MyProfile} />
          </Switch>
        </Drawer>
      </BrowserRouter>
    );
  }
}
