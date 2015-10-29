import React from 'react';
import Radium from 'radium';
import StopHeader from './StopHeader';
import StopStatus from './StopStatus';

let StopStyle = {
  base: {
    backgroundColor: 'orange',
    color: 'white'
  }
};

class Stop extends React.Component {
  render() {
    return (
      <section>
        <StopHeader />
        <div style={StopStyle.base}>
          <h1>A Stop Thing Potato</h1>
        </div>
      </section>
    )
  }
};

module.exports = Radium(Stop);
