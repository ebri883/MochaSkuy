import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


export default function PopularPeople(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid>
                    <Grid>
                        <Typography variant="title" className={classes.Header}>
                            PopularPeople
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs className={classes.isi}>
                                <List>
                                    {/* <ButtonBase className={classes.isi}> */}
                                    <Grid item container spacing={16}>
                                        <Grid item>
                                            <Avatar className={classes.Avatar}>R</Avatar>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <div className={classes.text}>
                                                <Typography variant="title" color="sekondary" className={classes.headline}>
                                                    #Admin
                                            </Typography>
                                                <Typography color="textSecondary" className={classes.headline}>@admin</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                        <Button color="primary" className={classes.button}>
                                            ADD
                                        </Button>
                                        </Grid>
                                    </Grid>
                                    {/* </ButtonBase> */}
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

PopularPeople.propTypes = {
    classes: PropTypes.object.isRequired,
};