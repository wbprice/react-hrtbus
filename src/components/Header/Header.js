import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Icon from '../common/Icon'
import { Router, Route, Link } from 'react-router'

let style = {

  header: {
    height: '3.25rem',
    background: Colors.blue.dark,
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%'
  },

  horizontal: {
    display: 'flex',
    alignItems: 'center'
  },

  menu: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },

  menuItem: {
    lineHeight: '3.25rem',
    padding: '0 1em'
  }

}

class Header extends React.Component {
  render() {
    return (
      <header style={style.header}>
        <div className="container" style={style.horizontal}>

          <Link to="/">
            <Icon source="/images/logo-white" height="36" width="36"/>
          </Link>
          <Link to="/">
            <h1>HRTb.us</h1>
          </Link>

          <ul style={[style.horizontal, style.menu]}>
            <li>
              <Link style={style.menuItem} to="/stop">Stop</Link>
            </li>
            <li>
              <Link style={style.menuItem} to="/route">Route</Link>
            </li>
          </ul>

        </div>
      </header>
    )
  }
}

export default Radium(Header)
