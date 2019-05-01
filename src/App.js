import React, { Component } from 'react';
import { BrowserRouter as Route, HashRouter } from 'react-router-dom'
// import Appbar from './Component/Appbar';
// import Drawer from './Component/Drawer';
// import Profile from './Component/Profile';
import MyProfile from './Page/Myprofile';
import Dashboard from './Page/Dashboard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/profile" component={MyProfile} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
