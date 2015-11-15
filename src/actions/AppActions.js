import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var AppActions = {
  pullStopData(){

      //Instead of randomJSON, we can pull the API from here and
      //put the data inside here
      var randomJson = Math.random() * 1000000;

  		AppDispatcher.handlePullStopData({
  	    	actionType:AppConstants.PULL_DATA,
          stopData: randomJson
      })
  }
}

module.exports = AppActions