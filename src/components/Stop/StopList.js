import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import {
  fetchStops
} from './../../redux/modules/stops/stop-actions'
import {
  faveStop,
  toggleFaveStop
} from './../../redux/modules/favorites/fave-stop-actions'
import { connect } from 'react-redux'

class StopList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.dispatch(fetchStops())
  }

  // takes a stopId to add/remove stopId as a favorited stop
  toggleFaveStop(stopId) {
    this.props.dispatch(toggleFaveStop(stopId))
  }

  checkFavorited(stopId) {
    return this.props.faves.faveStops.indexOf(stopId) !== -1
  }

  render() {
    return (
      <section>
        {this.props.data.stops.map(stop => {
          let isFavorited = this.checkFavorited(stop.stopId);

          return (
            <div >
              <Stop stop={stop} 
                faves={this.props.faves}
                toggleFaveStop={this.toggleFaveStop.bind(this, stop.stopId)}
                isFavorited={isFavorited} />
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
