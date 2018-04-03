import React, { Component } from 'react'
import Header from '../components/Header'
import GifCard from '../components/GifCard'
import { links } from '../utilities/util'
import { Chip } from 'material-ui'

import axios from 'axios'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

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
    return response.data.data;
    
  })
  .catch(function (error) {
    console.log(error);
  });
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {giphy: '', data: [].concat(links) };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(e) {
    this.setState({ giphy: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({data: getGifs(this.state.giphy)});
  }
  retrieveGifs() {
    //write function to make function call
  }
  handleChipClick(e) {
    e.preventDefault()
    this.setState({ giphy: e.currentTarget.textContent})
  }
  
  render() {
    const gifData = () => { 
      this.state.giphy.map(gif => {
        <GifCard gif={gif.images.fixed_height.url} still={gif.images.fixed_height_still.url} rating={gif.rating} />
      });
    }
    const chips = this.state.data.map((link) => {
        return <Chip label={link} key={link} style={styles.chip} onClick={this.handleChipClick}  />
      }); 
    return (
      <div>
        
        <div className="flex">
        {chips}
        </div>
      </div>
    ) 
}};

export default IndexPage
