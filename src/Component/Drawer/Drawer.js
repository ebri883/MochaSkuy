import React from 'react';
import logo from './logo.svg';
import Appbar from '../Appbar';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dashboard from '@material-ui/icons/Dashboard';
import ChatBubble from '@material-ui/icons/ChatBubble';
import Group from '@material-ui/icons/Group';
import { Link } from 'react-router-dom';
import Settings from '@material-ui/icons/Settings';
import { Divider, Drawer } from '@material-ui/core';


export default function PermanentDrawerLeft(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Appbar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img src={logo} className={classes.logo} alt="logo" />
        <Divider />
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText inset primary="My Profile" />
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText inset primary="Dashboard" />
        </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <ChatBubble />
          </ListItemIcon>
          <ListItemText inset primary="Chat" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText inset primary="Community" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
        </ListItem>
      </Drawer>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};


