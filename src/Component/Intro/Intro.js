import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Room from '@material-ui/icons/Room';
import Time from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Intro extends React.Component{
    state = {
        alamat: '',
        asal:'',
        gender:'',
    }
    componentDidMount = async () => {
        // const aku = 'https://moklet-sosmed.herokuapp.com/intro';
        const response = await axios
        .get(`https://moklet-sosmed.herokuapp.com/intro/krnhrw`,
            {
                auth: {
                    username: 'moca',
                    password: 'mokletchat123'
                  }
            }
        );
        console.log(response)
        this.setState({
            alamat: response.data.data[0].alamat,
            asal:response.data.data[0].asal,
            gender:response.data.data[0].gender
        })
      }

    render(){
        const { classes } = this.props;
        console.log(this.state)
        return(
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="title" className={classes.Header}>
                    Intro
      </Typography>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <ListItem>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    {/* <ListItemText inset primary="Stay in," /> */}
                                    <Typography variant="body2">Stay in {this.state.alamat}</Typography>
                                    <Button color="primary" className={classes.button}>
                                    
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Room />
                                    </ListItemIcon>
                                    {/* <ListItemText inset primary="From" /> */}
                                    <Typography variant="body2">From</Typography>
                                    <Button color="primary" className={classes.button}>
                                    {this.state.gender}
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Time />
                                    </ListItemIcon>
                                    {/* <ListItemText inset primary="Joined in" /> */}
                                    <Typography variant="body2">Joined in January 2019</Typography>
                                </ListItem>
                            </Grid>

                        </Grid>                    </Grid>
                </Grid>
            </Paper>
        </div>
    
        )
    }
}
console.log(Intro)  
export default Intro;

Intro.propTypes = {
    classes: PropTypes.object.isRequired,
};