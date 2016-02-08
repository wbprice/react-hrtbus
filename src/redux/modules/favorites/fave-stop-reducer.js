import {
  REMOVE_LOCAL_STOP,
  TOGGLE_FAVE_STOP,
  FETCH_FAVE_REQUEST,
  FETCH_FAVE_SUCCESS,
  FETCH_FAVE_FAILURE
} from './fave-stop-actions'


//@app.route('/api/v2/stops/<stopId>')

const initialState = {
  faveStops: getFaveStops(), //from localStorage
  faveStopApi: []
}

/*
 * @name setFaveStops
 * @param {array} faveStops
 * @description
 * Replaces the contents of localStorage['faveStops']
 * with a new array.
 */

function setFaveStops(faveStops) {
  localStorage['faveStops'] = faveStops
}

/*
 * @name getFaveStops
 * @description
 * Returns an array of stop ids that are favorited.
 */

function getFaveStops() {
  const faveStops = localStorage['faveStops']
  return faveStops ? faveStops.split(',') : []
}

export default function faveStops(state = initialState, action) {

  switch (action.type) {

    case TOGGLE_FAVE_STOP:
      const index = state.faveStops.indexOf(action.stopId)
      let newArray
      if (index !== -1) {
        newArray = [...state.faveStops].filter(stop => {
          return stop !== action.stopId
        })
      }
      else {
        newArray = [
          ...state.faveStops,
          action.stopId
        ]
      }

      setFaveStops(newArray)
    return Object.assign({}, state, {
      faveStops: newArray
    }) 

    case REMOVE_LOCAL_STOP:
      localStorage.removeItem('hrtFaves')
      return initialState

    case FETCH_FAVE_REQUEST:
      return state

    case FETCH_FAVE_SUCCESS:

    let obj = {
      stopId : action.routeId,
      buses : action.response
    }

    let arr = []
    arr.push(obj)

    let updateFave;

    state.faveStopApi.forEach((stop, index) => {
      if (stop.stopId == action.routeId) {
        updateFave = Object.assign({}, state, {
          faveStopApi: [
            ...state.faveStopApi.slice(0, index),
            arr,
            ...state.faveStopApi.slice(index + 1)
          ]
        })
      }
    })

    if (!updateFave) {
      return Object.assign({}, state, {
        isFetching: false,
        faveStopApi: [
          ...state.faveStopApi,
          ...arr
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
