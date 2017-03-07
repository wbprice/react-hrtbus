export const API_URL_BASE = 'http://lit-inlet-3610.herokuapp.com/api/v2/'
export const API_URL_STOPS = API_URL_BASE + 'stops/near'
export const API_URL_SINGLE = API_URL_BASE + 'stops'

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
