import {
  FAVE_STOP,
  POPU_STOPS,
  REMOVE_LOCAL_STOP
} from './fave-stop-actions'

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

    case REMOVE_LOCAL_STOP:
      localStorage.removeItem('hrtFaves')
      return initialState

    default:
      return state
  }
}
