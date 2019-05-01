import React from 'react';
import PropTypes from 'prop-types';
import Isi from '../Isi';

export default function Contain(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
                <Isi />
                <Isi />
            {/* </Paper> */}
        </div>
    );
}

Contain.propTypes = {
    classes: PropTypes.object.isRequired,
};