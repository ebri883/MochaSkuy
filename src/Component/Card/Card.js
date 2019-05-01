import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';



export default class Cards extends React.Component {

  state = {
    shotpic: '',
}
componentDidMount = async () => {

  const pic = await axios
  .get(`https://randomuser.me/api/?results=70`);
  
  this.setState({
      shotpic: pic.data.results[0].picture.thumbnail
  })
}

    state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>

        <CardMedia
          className={classes.media}
          title="Paella dish"
        ><img src={this.state.shotpic} alt=""/></CardMedia>
        
        {/* <Typography variant="body2">Shrimp</Typography>
        <Typography variant="caption">September 14, 2016</Typography> */}
        <CardContent>
          <Typography variant="body1">
            This impressive paella 
          </Typography>
          <Typography variant="caption">
            September 14, 2016
          </Typography>
          
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};