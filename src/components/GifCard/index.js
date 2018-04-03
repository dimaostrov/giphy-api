import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  };

function GifCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={classes.still}
          gif={classes.gif}
        />
        <CardContent>
          <Typography component="p">
            {classes.rating}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


export default withStyles(styles)(GifCard);