import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


export default function Post(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid>
                    <Grid>
                        <Typography variant="title" className={classes.Header}>
                            Make a Post
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item>
                        <Avatar className={classes.Avatar}>R</Avatar>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs className={classes.isi}>
                                <InputBase
                                    multiline
                                    placeholder="What are you thinking?"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Grid>
                    <div>
                    <Button color="primary" className={classes.button}>
                            Share
                        </Button>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="text-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="text-button-file">
                            <Button component="span" className={classes.button}>
                                Upload
                            </Button>
                        </label>
                    </div>
                </Grid>
            </Paper>
        </div>
    );
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};