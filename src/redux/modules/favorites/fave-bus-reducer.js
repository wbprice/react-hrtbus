import {
  FAVE_BUS,
  UNFAVE_BUS
} from './fave-bus-actions'

const initialState = {
  faveBuses: []
}

export default function faveBuses(state = initialState, action) {

  switch (action.type) {

    case FAVE_BUS:
    
      return Object.assign({}, state, {
        faveBuses: [
          ...state.faveBuses, action.busId
        ]
      })

    case UNFAVE_BUS:

      if (state.faveBuses) {
        for ( let i = 0; i < state.faveBuses.length; i++) {
          if (state.faveBuses[i] == action.busId) {
            return Object.assign({}, state, {
              faveBuses: [
                ...state.faveBuses.slice(0, i),
                ...state.faveBuses.slice(i + 1)
              ]
            })
          }
        }
      }

    default:
      return state

  }

}
