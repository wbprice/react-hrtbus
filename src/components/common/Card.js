import React from 'react'
import Radium from 'radium'

let styles = {

  base: {
    background: '#FEFEFA',
    padding: '1em',
    border: '1px solid white',
    marginBottom: '1em'
  },

  shadow: {
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14),' +
               '0 1px 5px 0 rgba(0, 0, 0, 0.12),' +
               '0 3px 1px -2px rgba(0, 0, 0, 0.2)'
  }

}

class Card extends React.Component {
  render() {
    return (
      <div style={[
        styles.base,
        this.props.shadow && styles.shadow
      ]}>
      {this.props.children}
      </div>
    )
  }
}

module.exports = Radium(Card);
