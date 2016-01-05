import React from 'react'
import Radium from 'radium'
import Stop from '../Stop/Stop'
import { connect } from 'react-redux'
import stops from '../../stores/mocks/stops'
import favestops from '../../stores/mocks/fave-stops'
import {faveStop, localStops, removeLocalStops} from '../../redux/modules/favorites/fave-stop-actions'

let nextTodoId = 0;
let stopArray = ['0209', '0430', '0281']


class FaveList extends React.Component {

  constructor() {
    super()
    this.state = {
      stops: favestops
    }
  }

  componentDidMount() {
    this.props.dispatch(localStops());
  }

  render() {

    const { dispatch, faves } = this.props

    return (
      <div>
      <section>
        {this.state.stops.map(function(stop) {
          return <div>
            {faves.faveStops.map(function(faves) {
              if (faves == stop.stop_id) {
                return <div><Stop key={stop.stop_id} stop={stop}/></div>
              }
            })}
          </div>
        })}
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
