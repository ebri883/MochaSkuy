import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ButtonBase from '@material-ui/core/ButtonBase';


export default function TrendingTopic(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid>
                    <Grid>
                        <Typography variant="title" className={classes.Header}>
                            Trending Topics
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs className={classes.isi}>
                                <List>
                                    <ButtonBase className={classes.isi}>
                                        <Grid item xs>
                                        <ArrowUpward className={classes.icon}/>
                                        <div className={classes.text}>
                                           <Typography variant="title" color="sekondary" className={classes.headline}>
                                                #Admin
                                            </Typography>
                                            <Typography color="textSecondary" className={classes.headline}>@admin</Typography> 
                                        </div>
                                        </Grid>
                                    </ButtonBase>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Divider /> */}
            </Paper>
        </div>
    );
}

TrendingTopic.propTypes = {
    classes: PropTypes.object.isRequired,
};