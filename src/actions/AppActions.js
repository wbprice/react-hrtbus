import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var AppActions = {
  pullStopData(coords){

    //Instead of randomJSON, we can pull the API from here and
    //put the data inside here
    var randomJson = Math.random() * 1000000;

		AppDispatcher.handlePullStopData({
	    actionType:AppConstants.PULL_DATA,
      stopData: randomJson,
      geoData: coords  //<---coordinates gathered from geoCheck()
  	})
  },

  //pulled from originalbusfinder
  //onFail sends downtown coordinates
  geoCheck() {
	  var onFail = function() {
	  	console.log("onFail");

	  	//mock downtownCoords
	  	var downtownCoords = {	coords : {
	  														latitude : 123,
	  														longitude : 456
	  													}
	  												};

	  	AppActions.pullStopData(downtownCoords);
		};

    var timeout = setTimeout(onFail, 5000);

    var onSuccess = function(position) {
      clearTimeout(timeout);
      AppActions.pullStopData(position);
    };

    navigator.geolocation ?
			navigator.geolocation.getCurrentPosition(onSuccess, onFail) : onFail();

  }
}

module.exports = AppActions