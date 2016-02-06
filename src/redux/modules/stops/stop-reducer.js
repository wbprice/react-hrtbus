import {
  FETCH_STOPS_REQUEST,
  FETCH_STOPS_SUCCESS,
  FETCH_STOPS_FAILURE
} from './stop-actions'

const initialState = {
  isFetching: false,
  stops: [],
  faveStops: []
}

export default function stops(state = initialState, action) {

  switch (action.type) {

    case FETCH_STOPS_REQUEST:
      return Object.assign({}, state, {
        isFetching: false
      })

    case FETCH_STOPS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        stops: [
          ...action.response
        ]
      })

    case FETCH_STOPS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state

  }

}
