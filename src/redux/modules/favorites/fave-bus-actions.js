export const FAVE_BUS = 'FAVE_BUS'
export const UNFAVE_BUS = 'UNFAVE_BUS'

export function faveBus(busId) {
  return {
    type: FAVE_BUS,
    busId: busId
  }
}

export function unfaveBus(busId) {
  return {
    type: UNFAVE_BUS,
    busId: busId
  }
}