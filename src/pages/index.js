import React, { Component } from 'react'
import Header from '../components/Header'
import GifCard from '../components/GifCard'
import { links } from '../utilities/util'
import { Chip, TextField, Button } from 'material-ui'

import axios from 'axios'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      giphy: '', 
      data: [].concat(links), 
      gifs: [], 
      value: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChipClick = this.handleChipClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  update(e) {
    this.setState({ giphy: e.target.value })
  }
  handleSubmit(e) {
    this.setState({
      data: [...this.state.data, this.state.value],
      value: ''
    }) 

    e.preventDefault()
  }

  getGifs = target => {
    let apiKey = `iqI0VayKvcUJfucRqQSwx6MJMCH8br9d`
    axios
      .get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          q: target,
          api_key: apiKey,
          limit: 10,
        },
      })
      .then(response => this.setState({ gifs: response.data.data }))
      .catch(function(error) {
        console.log(error)
      })
  }

  handleChipClick(e) {
    e.preventDefault();
    this.setState({ giphy: e.currentTarget.textContent });
    this.getGifs(e.currentTarget.textContent)
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const chips = this.state.data.map(link => {
      return (
        <Chip
          label={link}
          key={link}
          style={styles.chip}
          onClick={this.handleChipClick}
        />
      )
    })
    const display = (this.state.gifs.length > 0) 
    

    return (
      <div>
        <form
            onSubmit={this.handleSubmit}
            style={{
              float: 'right'
            }}
          >
            <TextField
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="search for something!"
            />
            
          </form>
        <div className="flex">{chips}</div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
        {display ? this.state.gifs.map((gif, i) => {
        return (
          <GifCard
            key={i}
            src={gif.images.downsized_still.url}
            gif={gif.images.downsized.url}
            rating={gif.rating}
          />
          )
        }) : ''}
      </div>
      </div>
    )
  }
}

export default IndexPage
