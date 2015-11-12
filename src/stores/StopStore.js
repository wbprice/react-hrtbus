import AppDispatcher from '../dispatcher/AppDispatcher'
import EventEmitter from 'events'
import stops from './mocks/stops'

const CHANGE_EVENT = 'change'

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
    this.on(CHANGE_EVENT, callback)
  }

  get() {
    return this.stops;
  }

}

const stopStore = new StopStore()

AppDispatcher.register(function(action) {

  stopStore.emitChange()

})

export default stopStore
