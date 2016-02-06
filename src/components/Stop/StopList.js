import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import {
  fetchStops
} from './../../redux/modules/stops/stop-actions'
import {
  faveStop,
  localStops,
  toggleFaveStop
} from './../../redux/modules/favorites/fave-stop-actions'
import { connect } from 'react-redux'

class StopList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {    
    this.props.dispatch(localStops());
    this.props.dispatch(fetchStops())
  }

  toggleFaveStop(stopId) {
    this.props.dispatch(toggleFaveStop(stopId))
  }

  render() {


    return (
      <section>
        {this.props.data.stops.map(stop => {
          return (
            <div >
              <Stop stop={stop} 
                  faves={this.props.faves}
                  toggleFaveStop={this.toggleFaveStop.bind(this, stop.stopId)} />
            </div>
            )
        })}
      </section>
    )
  }
}

export default connect(
  state => ({
    data: state.stops,
    faves: state.faveStops
  })
)(StopList)
