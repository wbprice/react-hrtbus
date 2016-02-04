import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import {
  fetchStops
} from './../../redux/modules/stops/stop-actions'
import { connect } from 'react-redux'

class StopList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.dispatch(fetchStops())
  }

  render() {
    return (
      <section>
        {this.props.data.stops.map(function(stop) {
          return <Stop key={stop.stop_id} stop={stop}/>
        })}
      </section>
    )
  }
}

export default connect(
  state => ({
    data: state.stops
  })
)(StopList)
