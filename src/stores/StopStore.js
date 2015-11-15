import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import EventEmitter from 'events'
import stops from './mocks/stops'

const CHANGE_EVENT = 'change'

var seconds = 0;

class StopStore extends EventEmitter {

  constructor() {
    super()
    this.stops = stops
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  get() {
    return this.stops;
  }

}

const stopStore = new StopStore()

AppDispatcher.register(function(action) {

  if (action.action.actionType == AppConstants.PULL_DATA) {
    seconds++;
    console.log('stored second ' + seconds);
  } 

  stopStore.emitChange()


})

export default stopStore
