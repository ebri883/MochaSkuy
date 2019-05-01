import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Profile from '../../Component/Profile';
import Intro from '../../Component/Intro';
import Post from '../../Component/Post';
import Shot from '../../Component/Shot';
import Grid from '@material-ui/core/Grid';

class MyProfile extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }


    componentDidMount() {
        this.timer = setTimeout(
            () => this.setState(prevState => ({ isLoading: !prevState.isLoading })),
            2000,
        );
    }

    render() {
        const { classes } = this.props;
        const isLoading  = this.state.isLoading;

        if (isLoading === true) {
            return (
                <div className={classes.centerLoading}>
                    <CircularProgress size={50} />
                </div>
            );
        }
        else {
            return (
                <div className={classes.root}>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={5}>
                                <Profile className={classes.profile} />
                                <Intro className={classes.intro} />
                                <Post />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Shot />
                            </Grid>
                        </Grid>
                    </main>
                </div>
            );
        }
    }

}


export default MyProfile;

MyProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};
