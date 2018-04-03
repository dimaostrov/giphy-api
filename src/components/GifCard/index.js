import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

function GifCard(props) {
  return (
    <div style={{
      maxWidth: '100px'
    }}>
      <Card>
        <CardMedia
          overlay={
            <CardContent>
              <Typography component="p">{'Rating: ' + props.rating}</Typography>
            </CardContent>
          }
          image={props.src}
          gif={props.gif}
        />
      </Card>
    </div>
  )
}

export default withStyles(styles)(GifCard)
