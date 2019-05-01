import React from 'react';
import PropTypes from 'prop-types';
import Appbar from '../../Component/Appbar';
import Drawer from '../../Component/Drawer';
import Profile from '../../Component/Profile';
import Intro from '../../Component/Intro';
import Post from '../../Component/Post';
import Shot from '../../Component/Shot';
import Grid from '@material-ui/core/Grid';

class MyProfile extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <header className="">
                    <Appbar />
                    <Drawer />
                </header>
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


export default MyProfile;

MyProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};
