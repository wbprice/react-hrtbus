import React from 'react'
import Radium from 'radium'
import Colors from './Colors'

let container = {
    height: '3rem',
    width: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

class Badge extends React.Component {
  render() {
    return (
      <section
        style={[
          container,
          this.props.background && { background: this.props.background }
        ]}>
        {this.props.children}
      </section>
    );
  }
}

export default Radium(Badge)
