import React from 'react';
import Stop from './Stop';
import Radium from 'radium';

let styles = {
  base: {
    maxWidth: '540px',
    background: 'blue',
    margin: '0 auto'
  }
};

class StopList extends React.Component {
  render() {
    return (
      <section style={styles.base}>
        <Stop />
        <Stop />
        <Stop />
      </section>
    )
  }
}

module.exports = Radium(StopList);
