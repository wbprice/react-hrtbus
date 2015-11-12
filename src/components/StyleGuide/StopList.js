import React from 'react'
import Radium from 'radium'
import Stop from '../Stop/Stop'
import Mock from '../../stores/mocks/stop'

class StopList extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h2>List of Stops</h2>
          <p>A list of Stop Elements.</p>
        </header>
        <Stop stop={Mock[0]}/>
      </section>
    )
  }
}

export default StopList
