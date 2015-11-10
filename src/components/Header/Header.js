import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'

let headerStyles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: Colors.blue.dark,
    color: Colors.white.base,
    height: '3.25rem',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
  },

  heading: {
    fontSize: '1.5em',
    display: 'flex'
  }

}

class Header extends React.Component {
  render() {
    return (
      <header style={headerStyles.base}>
        <div className="container">
          <h1 style={headerStyles.heading}>HRTb.us</h1>
        </div>
      </header>
    )
  }
}

export default Radium(Header)
