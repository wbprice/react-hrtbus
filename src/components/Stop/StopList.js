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
        <pre>StopList</pre>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </section>
    )
  }
};

export default StopList
