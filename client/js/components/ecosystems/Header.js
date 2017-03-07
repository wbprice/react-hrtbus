const React = require('react');
const Icon = require('./../atoms/Icon');

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <Icon source="/dist/images/logo-white.png" height="36" width="36"/>
        <h1 className="app-header--title">HRTb.us</h1>
      </header>
    )
  }
}

module.exports = Header
