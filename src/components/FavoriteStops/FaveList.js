import React from 'react'
import Radium from 'radium'
import Stop from '../Stop/Stop'
import { connect } from 'react-redux'
import favestops from '../../stores/mocks/fave-stops'
import {
  faveStop, 
  localStops, 
  removeLocalStops,
  removeFaveStop,
  fetchFaveStop,
  toggleFaveStop
} from '../../redux/modules/favorites/fave-stop-actions'

class FaveList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.dispatch(localStops());
    this.props.dispatch(fetchFaveStop(8004));
    this.props.dispatch(fetchFaveStop(2000));
  }

  toggleFaveStop(stopId) {
    this.props.dispatch(toggleFaveStop(stopId))
  }

  render() {


    debugger

    return (
      <div>
      <section>
        <div>
        {this.props.faves.faveStopApi.map(stop => {
          return (
            <div >
              <Stop stop={stop} 
                    faves= {this.props.faves}
                    toggleFaveStop={this.toggleFaveStop.bind(this, stop.stopId)} />

            </div>
            )
        })}
        </div>
        <div>
          <button onClick= {() => {
            let busId = Math.floor(Math.random() * (stopArray.length))
            dispatch(faveStop(stopArray[busId]));
          }}> Add random stop
          </button>
          <button onClick= {() => {
            dispatch(removeLocalStops());
          }}> Empty Local Storage
          </button>
        </div>
      </section>
      </div>
    )
  }
}

/*FaveList.propTypes = {
    dispatch: React.PropTypes.func.isRequired
  }*/

export default connect(
  state => ({
    data: state.stops,
    faves: state.faveStops
  })
)(FaveList)
