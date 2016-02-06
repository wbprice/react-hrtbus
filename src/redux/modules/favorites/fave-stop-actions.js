import fetchJsonp from 'fetch-jsonp'
import { API_URL_SINGLE, checkStatus } from './../common'

export const FAVE_STOP = 'FAVE_STOP'
export const POPU_STOPS = 'POPU_STOPS'
export const REMOVE_LOCAL_STOP = 'REMOVE_LOCAL_STOP'
export const REMOVE_FAVE_STOP = 'REMOVE_FAVE_STOP'
export const TOGGLE_STOP = 'TOGGLE_STOP'
export const FETCH_FAVE_SUCCESS = 'FETCH_FAVE_SUCCESS'
export const FETCH_FAVE_REQUEST = 'FETCH_FAVE_REQUEST'
export const FETCH_FAVE_FAILURE = 'FETCH_FAVE_FAILURE'

//@app.route('/api/v2/stops/<stopId>')


export function faveStop(routeId) {
	return {
		type: FAVE_STOP,
		routeId: routeId
	}
}

export function localStops() {
	return {
		type:POPU_STOPS
	}
}

export function removeLocalStops() {
	return {
		type: REMOVE_LOCAL_STOP
	}
}

export function removeFaveStop(routeId) {
	return {
		type: REMOVE_FAVE_STOP,
		routeId: routeId
	}
}

export function toggleFaveStop(routeId) {
	return {
		type: TOGGLE_STOP,
		routeId: routeId
	}
}

export function fetchFaveStop(routeId) {

	routeId = 8001
	return function(dispatch) {
		dispatch(fetchFaveRequest())
		return fetchJsonp(`${API_URL_SINGLE}/${routeId}`)
		.then(response => response.json())
		.then(json => dispatch(fetchFaveSuccess(json)))
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

export function fetchFaveSuccess(response) {
  return {
    type: FETCH_FAVE_SUCCESS,
    response
  }
}
