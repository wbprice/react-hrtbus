import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import StopStore from '../../stores/StopStore'
import AppActions from '../../actions/AppActions'

function getStops() {
  return {
    stops: StopStore.get()
  }
}

class StopList extends React.Component {

  constructor() {
    super()
    this.state = getStops()    
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    StopStore.addChangeListener(this._onChange)
    this.startAPInGeo();
    this.interval = setInterval(this.startAPInGeo, 2000);
  }

  startAPInGeo() {
    AppActions.pullStopData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    StopStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    console.log('settingstate');
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
