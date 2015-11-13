import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import StopStore from '../../stores/StopStore'

function getStops() {
  return {
    stops: StopStore.get()
  }
}

class StopList extends React.Component {

  constructor() {
    super()
    this.state = getStops()
  }

  componentDidMount() {
    StopStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    StopStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(getStops());
  }

  render() {
    return (
      <section>
        {this.state.stops.map(function(stop) {
          return <Stop key={stop.stop_id} stop={stop}/>
        })}
      </section>
    )
  }
};

export default StopList
