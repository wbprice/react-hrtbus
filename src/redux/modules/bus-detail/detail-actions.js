import fetch from 'isomorphic-fetch'
import { API_URL_STOPS, checkStatus } from './../common'

export const FETCH_BUS_DETAIL = 'FETCH_BUS_DETAIL'
export const FETCH_BUS_REQUEST = 'FETCH_STOPS_REQUEST'
export const FETCH_BUS_SUCCESS = 'FETCH_STOPS_SUCCESS'
export const FETCH_BUS_FAILURE = 'FETCH_STOPS_FAILURE'

export function fetchStopsRequest() {
  return {
    type: FETCH_BUS_REQUEST
  }
}

export function fetchStopsFailure(error) {
  return {
    type: FETCH_BUS_FAILURE,
    error
  }
}

export function fetchStopsSuccess(response) {
  return {
    type: FETCH_BUS_SUCCESS,
    response
  }
}

// still need to find what to pull. maybe by stopId or busId
export function fetchBusDetail() {
  return function(dispatch) {
    dispatch(fetchStopsRequest())
    return fetch(`${API_URL_STOPS}/${lat}/${lon}`) 
    .then(checkStatus)
    .then(response => response.json())
    .then(json => dispatch(fetchStopsSuccess(json)))
    .catch(error => {
      dispatch(fetchStopsFailure(error))
    })
  }
}
