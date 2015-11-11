import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Icon from '../common/Icon'

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
    flexDirection: 'row',
    alignItems: 'center',
  },

  heading: {
    fontSize: '1.5em',
    display: 'flex'
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
        </div>
      </header>
    )
  }
}

export default Radium(Header)
