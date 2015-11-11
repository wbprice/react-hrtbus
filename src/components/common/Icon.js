import React from 'react'
import Radium from 'radium'

class Icon extends React.Component {
  render() {

    let height = this.props.height || '48px',
        width = this.props.width || '48px',
        source = this.props.source

    return (
      <img src={`${source}.png`} width={width} height={height} />
    );
  }
}

export default Icon
