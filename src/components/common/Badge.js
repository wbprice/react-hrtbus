import React from 'react'
import Radium from 'radium'
import Colors from './Colors'

let container = {
  base: {
    height: '3.25rem',
    width: '5rem',
    background: '#efefef',
    fontSize: '1.5em',
    fontWeight: '700'
  },
}

class Badge extends React.Component {
  render() {

    console.log(this.props.color);

    return (
      <section
        style={[
          container.base,
          this.props.background && { background: this.props.background }
        ]}>
        {this.props.children}
      </section>
    );
  }
}

export default Radium(Badge)
