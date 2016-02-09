import {
  REMOVE_LOCAL_STOP,
  TOGGLE_FAVE_STOP,
  FETCH_FAVE_REQUEST,
  FETCH_FAVE_SUCCESS,
  FETCH_FAVE_FAILURE
} from './fave-stop-actions'


//@app.route('/api/v2/stops/<stopId>')

const initialState = {
  faveStopIds: getFaveStops(), //from localStorage
  faveStops: []
}

/*
 * @name setFaveStops
 * @param {array} faveStops
 * @description
 * Replaces the contents of localStorage['faveStops']
 * with a new array.
 */

function setFaveStops(faveStopIds) {
  localStorage['faveStops'] = faveStopIds
}

/*
 * @name getFaveStops
 * @description
 * Returns an array of stop ids that are favorited.
 */

function getFaveStops() {
  const faveStopIds = localStorage['faveStops']
  return faveStopIds ? faveStopIds.split(',') : []
}

export default function faveStops(state = initialState, action) {

  switch (action.type) {

    case TOGGLE_FAVE_STOP:
      const index = state.faveStopIds.indexOf(action.stopId)
      const indexOfFave = state.faveStops.map(function(e) {
        return e.stopId
      }).indexOf(action.stopId)
      let newArray
      if (index !== -1) {
        newArray = [...state.faveStopIds].filter(stop => {
          return stop !== action.stopId
        })
      }
      else {
        newArray = [
          ...state.faveStopIds,
          action.stopId
        ]
      }

      let newFaveStopArr = state.faveStops
      if (indexOfFave !== 1) {
        newFaveStopArr = state.faveStops.filter(stop => {
          return stop.stopId !== action.stopId
        })
      } 

      setFaveStops(newArray)
      return Object.assign({}, state, {
        faveStopIds: newArray,
        faveStops: newFaveStopArr
      }) 

    case REMOVE_LOCAL_STOP:
      localStorage.removeItem('hrtFaves')
      return initialState

    case FETCH_FAVE_REQUEST:
      return state

    case FETCH_FAVE_SUCCESS:

      let res = {
        stopId : action.routeId,
        buses : action.response
      }

      const faveIndex = state.faveStops.map( e => { return e.stopId; }).indexOf(action.routeId);

      if (faveIndex !== -1) { 
        return Object.assign({}, state, {
          faveStops: [
            ...state.faveStops.slice(0, faveIndex),
            res,
            ...state.faveStops.slice(faveIndex + 1)
          ]
        })
      } else {
        return Object.assign({}, state, {
          faveStops: [
            ...state.faveStops,
            ...[res]
          ]
        })
      }

      return state

    case FETCH_FAVE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state
  }
}
