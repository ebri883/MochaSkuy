import React from 'react';
import PropTypes from 'prop-types';
import Appbar from '../../Component/Appbar';
import Drawer from '../../Component/Drawer';
import PostDashboard from '../../Component/PostDashboard';
import Contain from '../../Component/Contain';
import TrendingTopic from '../../Component/TrendingTopic';
import PopularPeople from '../../Component/PopularPeople';
import Grid from '@material-ui/core/Grid';

export default function Dashboard(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <header className="">
                <Appbar />
                <Drawer />
            </header>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <PostDashboard />
                        <Contain />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TrendingTopic />
                        <PopularPeople />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};