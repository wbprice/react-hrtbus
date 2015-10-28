import React from 'react';

let StopStyle = {
  backgroundColor: 'orange',
  color: 'white'
};

class Stop extends React.Component {
  render() {
    return (
      <div style={StopStyle}>
        <h1>A Stop Thing Potato</h1>
      </div>
    )
  }
}

Stop.defaultProps = {

};

export default Stop;
