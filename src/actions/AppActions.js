import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var AppActions = {
  pullStopData(){
  		AppDispatcher.handlePullStopData({
  	    	actionType:AppConstants.PULL_DATA
      })
  }
}

module.exports = AppActions