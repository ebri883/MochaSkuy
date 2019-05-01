import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class ComplexGrid extends React.Component {
    state = {
      namadpn: '',
      namablkg:'',
      username:'',
      follow:'',
      post:'',
      follower:'',
      profilepic: '',
    }
    componentDidMount = async () => {
      const a = 
      await axios.get(`https://moklet-sosmed.herokuapp.com/api/myprofile/get/krnhrw`,  
          {
              auth: {
                  username: 'moca',
                  password: 'mokletchat123'
                }
          }
      );
      this.setState({
          namadpn: a.data.data.namadpn,
          namablkg:a.data.data.namablkg,
          username:a.data.data.username
      })

      const b = 
      await axios.get(`https://moklet-sosmed.herokuapp.com/followingcount/krnhrw`,  
          {
              auth: {
                  username: 'moca',
                  password: 'mokletchat123'
                }
          }
      );
      this.setState({
          follow: b.data.data
      })

      const c =
      await axios.get(`https://moklet-sosmed.herokuapp.com/api/myprofile/getpost/krnhrw`,  
          {
              auth: {
                  username: 'moca',
                  password: 'mokletchat123'
                }
          }
      );
      this.setState({
          post: c.data.data
      })

      const d = await axios
      .get(`https://moklet-sosmed.herokuapp.com/api/myprofile/getfollowers/krnhrw`,  
          {
              auth: {
                  username: 'moca',
                  password: 'mokletchat123'
                }
          }
      );
      this.setState({
          follower: d.data.data
      })

      const e = await axios
      .get(`https://randomuser.me/api/?results=69`);
      this.setState({
          profilepic: e.data.results[0].picture.thumbnail
      })
    }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid>
            <Grid>
              <Typography variant="title" className={classes.Header}>
                My Profile
            </Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={16}>
            <Grid item>
              <Avatar className={classes.Avatar}><img src={this.state.profilepic} alt=""/></Avatar>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs className={classes.isi}>
                  <Typography variant="headline">
                    {this.state.namadpn} {this.state.namablkg}
                  </Typography>
                  <Typography color="textSecondary">@{this.state.username}</Typography>
                  <div>
                    <Button color="primary" className={classes.button}>
                      Edit
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />



          <div className={classes.bottomisi}>
            <Grid container spacing={8} >
              <Grid container item xs={12} spacing={24} >
                <Grid item xs={4}>
                  <Typography variant="title">
                    {this.state.post}
                    </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Shots
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="title">
                    {this.state.follower}
                    </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Followers
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="title">
                  {this.state.follow}
                    </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Following
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}
 
export default ComplexGrid;

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};