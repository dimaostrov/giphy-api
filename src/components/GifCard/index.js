import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import style from './style.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

class GifCard extends React.Component(props) {
  return (
    <div style={{
      minWidth: '100px',
      minHeight: '100px'
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

export default GifCard
//export default withStyles(styles)(GifCard)
