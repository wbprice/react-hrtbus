import React from 'react'
import Radium from 'radium'

let container = {
  height: '3.25rem',
  width: '5rem',
  background: '#efefef',
  fontSize: '1.5em',
  fontWeight: '700'
}

class Badge extends React.Component {
  render() {
    return (
      <section style={container} className="row center-xs middle-xs">
        {this.props.children}
      </section>
    );
  }
}

export default Badge
