import React from 'react';
import Radium from 'radium';

class Icon extends React.Component {
  render() {

    let height = this.props.height || 48,
        width = this.props.width || 48,
        source = this.props.source

    return (
      <svg width={width} height={height}>
        <image xlink:href={`${source}.svg`} src={`${source}.png`} width={width} height={height} />
      </svg>
    );
  }
}

export default Icon
