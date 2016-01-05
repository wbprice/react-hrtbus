export const FAVE_STOP = 'FAVE_STOP'
export const POPU_STOPS = 'POPU_STOPS'
export const REMOVE_LOCAL_STOP = 'REMOVE_LOCAL_STOP'

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