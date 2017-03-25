const React = require('react');
const Icon = require('./../atoms/Icon');

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-header--title">HRTb.us</h1>
      </header>
    )
  }
}

module.exports = Header
