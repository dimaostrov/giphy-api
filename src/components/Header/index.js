import React, { Component } from 'react'
import { Button, TextField, Chip, AppBar,  } from 'material-ui/'
import GifCard from '../GifCard'

import axios from 'axios';

let links = [`parrot`, `office`, `schwarzeneger`, `stallion`, `hendrix`, `ylvis`, `casualties`, `dropkick murphiess`]


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

let gifData = (data) => {
  
}

let getGifs = (target) => {
  let apiKey = `iqI0VayKvcUJfucRqQSwx6MJMCH8br9d`;
  axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      q: target,
      api_key: apiKey,
      limit: 10
    }
  })
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { giphy: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update(e) {
    this.setState({ giphy: e.target.value })
  }
  handleSubmit(e) {
    getGifs(this.state.giphy)
    e.preventDefault();
  }
  
  render () {
    return (
      <AppBar
        style={{
          background: 'purple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <form>
            <TextField
              type='text'
              value={this.state.giphy}
              placeholder="search for something already!"
              onChange={this.update.bind(this)}
            />
            <Button type="submit" onClick={this.handleSubmit}>find</Button>
          </form>
          <div style={styles.wrapper}>  
          </div>
        </div>
      </AppBar>

    )
  }
}

export default Header


