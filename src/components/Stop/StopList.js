import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import StopStore from '../../stores/StopStore'
import AppActions from '../../actions/AppActions'

function getStops() {
  return {
    stopListData: StopStore.get()
  }
}

class StopList extends React.Component {

  constructor() {
    super()
    this.state = getStops()
    this._onChange = this._onChange.bind(this);
    this.startAPI = this.startAPI.bind(this);
  }

  componentDidMount() {
    StopStore.addChangeListener(this._onChange)
    this.startGeoData();
    this.interval = setInterval(this.startAPI, 10000);
  }

  //only if location data has been loaded, resend API request
  startAPI() {
    if (this.state.stopListData.locationCoords) {
      AppActions.pullStopData(this.state.stopListData.locationCoords);
    }
  }

  startGeoData() {
    AppActions.geoCheck();
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

    if (!this.state.stopListData.locationCoords) {
      //probably needs better CSS
      return (<div><center><img src="../../images/466.gif" /></center></div>)
    } else {
      console.log("Latitude = " + this.state.stopListData.locationCoords.coords.latitude);
      console.log("Longitude = " + this.state.stopListData.locationCoords.coords.longitude);
    }
    return (
      <section>   
        {this.state.stopListData.stops.map(function(stop) {
          return <Stop key={stop.stop_id} stop={stop}/>
        })}
      </section>
    )
  }
};

export default StopList
