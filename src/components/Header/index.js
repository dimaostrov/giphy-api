import React from 'react'
import { Button, TextField, Chip } from 'material-ui/'

import Link from 'gatsby-link';

let links = [`parrot`, `office`, `schwarzeneger`, `stallion`, `hendrix`, `ylvis`, `casualties`, `dropkick murphiess`]

let ListLink = (props) => {
  props.props.map((y) => {
    <Chip>{y}</Chip>
  });
};

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const Header = () => (
  <div
    style={{
      background: 'bisque',
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
      <div>
        <TextField
          placeholder="search for something already!"
        />
        <Button>find</Button>
      </div>
      <div style={styles.wrapper}>
        <ListLink props={links} />
      </div>
    </div>
  </div>
)

export default Header
