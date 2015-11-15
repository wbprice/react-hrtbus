import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var AppActions = {
  pullStopData(){
    
      var randomJson = Math.random() * 1000000;

  		AppDispatcher.handlePullStopData({
  	    	actionType:AppConstants.PULL_DATA,
          stopData: randomJson
      })
  }
}

module.exports = AppActions