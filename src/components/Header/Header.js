import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Icon from '../common/Icon'
import { Router, Route, Link } from 'react-router'

let style = {
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

  icon: {
    marginRight: '.5em'
  },

  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  heading: {
    fontSize: '1.5em',
    flex: 1
  },

  ul: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    paddingLeft: 0,
    margin: 0
  },

  li: {
    padding: '0 0.5em'
  }

}

class Header extends React.Component {
  render() {
    return (
      <header style={style.base}>
        <div className="container" style={style.container}>
          <div style={style.icon}>
            <Icon source="/images/logo-white" height="36" width="36"/>
          </div>
          <h1 style={style.heading}>HRTb.us</h1>
          <ul style={style.ul}>
            <li style={style.li}><Link to="/stop">Stop</Link></li>
            <li style={style.li}><Link to="/route">Route</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Radium(Header)
