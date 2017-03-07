import fetchJsonp from 'fetch-jsonp'
import { API_URL_STOPS, checkStatus } from './../common'

export const FETCH_STOPS = 'FETCH_STOPS'
export const FETCH_STOPS_REQUEST = 'FETCH_STOPS_REQUEST'
export const FETCH_STOPS_SUCCESS = 'FETCH_STOPS_SUCCESS'
export const FETCH_STOPS_FAILURE = 'FETCH_STOPS_FAILURE'

export function fetchStopsRequest() {
  return {
    type: FETCH_STOPS_REQUEST
  }
}

export function fetchStopsFailure(error) {
  return {
    type: FETCH_STOPS_FAILURE,
    error
  }
}

export function fetchStopsSuccess(response) {
  return {
    type: FETCH_STOPS_SUCCESS,
    response
  }
}

export function fetchStops() {

  const lat = 36.8468700
  const lon = -76.2922870

  return function(dispatch) {
    dispatch(fetchStopsRequest())
    return fetchJsonp(`${API_URL_STOPS}/${lat}/${lon}`)
    .then(response => response.json())
    .then(json => dispatch(fetchStopsSuccess(json)))
    .catch(error => {
      dispatch(fetchStopsFailure(error))
    })
  }
}
