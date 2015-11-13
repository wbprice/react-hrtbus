import React from 'react'
import Radium from 'radium'

import ColorSwatches from './Colors'
import Typography from './Typography'
import Elements from './Elements'
import StopList from './StopList'

class StyleGuide extends React.Component {
  render() {

    let styles = {
      marginBottom: '4em'
    }

    return (
      <article className="container">

        <Typography />
        <ColorSwatches />
        <Elements />
        <StopList />

      </article>
    );
  }
}

export default StyleGuide
