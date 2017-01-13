import 'babel-core/polyfill'
import React from 'react'
import Radium from 'radium'
import Stop from '../Stop/Stop'
import { connect } from 'react-redux'
import {
  removeLocalStops,
  fetchFaveStop,
  toggleFaveStop
} from '../../redux/modules/favorites/fave-stop-actions'

class FaveList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.faves.faveStopIds.forEach(stop => {
      this.props.dispatch(fetchFaveStop(stop))
    })
  }

  toggleFaveStop(stopId) {
    this.props.dispatch(toggleFaveStop(stopId))
  }

  checkFavorited(stopId) {
    return this.props.faves.faveStopIds.indexOf(stopId) !== -1
  }

  render() {

    return (
      <div>
      <section>
        <div>
        {this.props.faves.faveStops.map((stop, index) => {
          return (
            <Stop stop={stop} 
              key={index}
              faves= {this.props.faves}
              toggleFaveStop={this.toggleFaveStop.bind(this, stop.stopId)}
              isFavorited={true} />
          )
        })}
        </div>
        <div>
          <button onClick= {() => {
            this.props.dispatch(removeLocalStops());
          }}> Empty Local Storage
          </button>
        </div>
      </section>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.stops,
    faves: state.faveStops
  })
)(FaveList)
