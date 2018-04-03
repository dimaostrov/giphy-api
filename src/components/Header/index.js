import React, { Component, createContext } from 'react'
import { Button, TextField, AppBar } from 'material-ui/'
import GifCard from '../GifCard'


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};



class Header extends React.Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }


  handleSubmit(e){
    e.preventDefault()
  }

  render () {
     return (
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          
          <div style={styles.wrapper}>  
          </div>
        </div>
    )
  }
}

export default Header


