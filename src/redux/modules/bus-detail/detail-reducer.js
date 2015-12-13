import {
  FETCH_BUS_REQUEST,
  FETCH_BUS_SUCCESS,
  FETCH_BUS_FAILURE
} from './detail-actions'

const initialState = {
  isFetching: false,
  stops: []
}

export default function details(state = initialState, action) {

  switch (action.type) {

    case FETCH_BUS_REQUEST:
      return Object.assign({}, state, {
        bus: busId
      })

    case FETCH_BUS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false
      })

    case FETCH_BUS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state

  }

}
