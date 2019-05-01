import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '../Card';


export default class Shot extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid>
            <Grid>
              <Typography variant="title" className={classes.Header}>
                Shots
          </Typography>
            </Grid>
          </Grid>
          <Divider />
          <div className={classes.isi}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={4} >
                <Card />
                <Card />
                <Card />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card />
                <Card />
                <Card />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card />
                <Card />
                <Card />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }

}

Shot.propTypes = {
  classes: PropTypes.object.isRequired,
};