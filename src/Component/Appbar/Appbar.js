import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';


export default class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
            </div>
            <Grid item xs className={classes.isi}>
                <Typography variant="title" color="sekondary" className={classes.headline}>
                  Admin
                </Typography>
                <Typography color="textSecondary" className={classes.headline}>@admin</Typography>
              </Grid>
          </Toolbar>
        </AppBar>
        {/* {renderMenu}
        {renderMobileMenu} */}
      </div>
    );
}
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


