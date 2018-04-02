import React, { Component } from 'react'
import Header from '../components/Header'
import GifCard from '../components/GifCard'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {giphy: '', data: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(e) {
    this.setState({ giphy: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({data: getGifs(this.state.giphy)});
  }
  
  render() {
    return (
      <div>
        <Header />
        <GifCard />
      </div>
    )
  }
}

export default IndexPage
