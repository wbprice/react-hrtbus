import React from 'react';
import Radium from 'radium';
import Location from '../Location/Location'
import Header from '../Header/Header'

let body = {
  marginTop: '3.25rem',
  paddingTop: '1rem'
}

class Home extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <section style={body}>
          {this.props.children}
        </section>
      </section>
    )
  }
}

export default Home
