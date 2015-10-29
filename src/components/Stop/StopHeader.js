import React from 'react';

let styles = {
  base: {
    textAlign: 'center'
  }
}

class StopHeader extends React.Component {
  render() {
    return (
      <header style={styles.base}>
        <h1>Stop Name</h1>
        <span>Stop Name</span>
      </header>
    )
  }
};

module.exports = StopHeader;
