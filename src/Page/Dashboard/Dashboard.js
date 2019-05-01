import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostDashboard from '../../Component/PostDashboard';
import Contain from '../../Component/Contain';
import TrendingTopic from '../../Component/TrendingTopic';
import PopularPeople from '../../Component/PopularPeople';
import Grid from '@material-ui/core/Grid';

export default class Dashboard extends React.Component {

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
        const  isLoading  = this.state.isLoading;

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
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};