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

class GifCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: this.props.gif,
      still: this.props.src,
      current: this.props.src
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        gif: nextProps.gif,
        still: nextProps.src,
        current: nextProps.src
      })
    }
  

  handleClick(){
    this.state.current == this.state.gif ?
    this.setState({
      current: this.state.still  
    }) : 
    this.setState({
      current: this.state.gif  
    })
  }
  render(){

    return (
        <Card>
          <CardMedia 
            image={this.state.current}
            onClick={this.handleClick}
          />
            <CardContent>
              <Typography component="p">{'Rating: ' + this.props.rating}</Typography>
            </CardContent>
        </Card>
    )
  }
}

export default GifCard
//export default withStyles(styles)(GifCard)
