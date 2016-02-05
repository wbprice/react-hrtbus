import {
  FAVE_STOP,
  POPU_STOPS,
  REMOVE_LOCAL_STOP,
  REMOVE_FAVE_STOP
} from './fave-stop-actions'


//@app.route('/api/v2/stops/<stopId>')

const initialState = {
  faveStops: []
}

export default function faveStops(state = initialState, action) {

  switch (action.type) {

    case FAVE_STOP:
      let newFaves = Object.assign({}, state, {
        faveStops: [
          ...state.faveStops, action.routeId
        ]
      })
      localStorage['hrtFaves'] = JSON.stringify(newFaves);
      return newFaves

    case POPU_STOPS:
      if (localStorage.hrtFaves) {
        let oldFaves = JSON.parse(localStorage['hrtFaves'])
        return oldFaves
      }
      return state

    case REMOVE_FAVE_STOP:
      let hrtFaves = JSON.parse(localStorage['hrtFaves'])
      let removeIndex;
      hrtFaves.faveStops.forEach(function (element, index) {
          if (element == action.routeId) removeIndex = index
      })

      let removeFaveState = Object.assign({}, state, {
        faveStops: [
          ...state.faveStops.slice(0, removeIndex),
          ...state.faveStops.slice(removeIndex + 1)
        ]
      })
      localStorage['hrtFaves'] = JSON.stringify(removeFaveState);
      return removeFaveState

    case REMOVE_LOCAL_STOP:
      localStorage.removeItem('hrtFaves')
      return initialState

    default:
      return state
  }
}
