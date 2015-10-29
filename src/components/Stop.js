import React from 'react';
import Radium from 'radium';

let StopStyle = {
  base: {
    backgroundColor: 'orange',
    color: 'white'
  }
};

class Stop extends React.Component {
  render() {
    return (
      <div style={StopStyle.base}>
        <h1>A Stop Thing Potato</h1>
      </div>
    )
  }
};

Stop.defaultProps = {

};

module.exports = Radium(Stop);
