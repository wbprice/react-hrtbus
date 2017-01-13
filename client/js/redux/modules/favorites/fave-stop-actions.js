import fetchJsonp from 'fetch-jsonp'
import { API_URL_SINGLE, checkStatus } from './../common'

export const REMOVE_LOCAL_STOP = 'REMOVE_LOCAL_STOP'
export const TOGGLE_FAVE_STOP = 'TOGGLE_FAVE_STOP'
export const FETCH_FAVE_SUCCESS = 'FETCH_FAVE_SUCCESS'
export const FETCH_FAVE_REQUEST = 'FETCH_FAVE_REQUEST'
export const FETCH_FAVE_FAILURE = 'FETCH_FAVE_FAILURE'

//@app.route('/api/v2/stops/<stopId>')

export function removeLocalStops() {
	return {
		type: REMOVE_LOCAL_STOP
	}
}

export function toggleFaveStop(stopId) {
	return {
		type: TOGGLE_FAVE_STOP,
		stopId: stopId
	}
}

export function fetchFaveStop(routeId) {

	return function(dispatch) {
		dispatch(fetchFaveRequest())
		return fetchJsonp(`${API_URL_SINGLE}/${routeId}`)
		.then(response => response.json())
		.then(json => dispatch(fetchFaveSuccess(json, routeId)))
		.catch(error => {
			dispatch(fetchFaveFailure(error))
		})
	}
}


export function fetchFaveRequest() {
  return {
    type: FETCH_FAVE_REQUEST
  }
}

export function fetchFaveFailure(error) {
  return {
    type: FETCH_FAVE_FAILURE,
    error
  }
}

export function fetchFaveSuccess(response, routeId) {
  return {
    type: FETCH_FAVE_SUCCESS,
    routeId: routeId,
    response
  }
}

