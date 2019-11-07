import {
	LOGIN_FULLFILLED,
	LOGIN_REJECTED,
	LOGIN_SENT,
	LOGOUT,
} from '../actions/actionTypes'
import { loadState } from '../store/localStorage'
const initialState = loadState() || {
	auth_token: '',
	loggedIn: false,
	error: '',
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SENT:
			return state
		case LOGIN_REJECTED:
			return {
				...state,
				error: action.payload,
			}
		case LOGIN_FULLFILLED:
			return {
				...state,
				auth_token: action.payload.token,
				loggedIn: true,
				error: '',
			}
		case LOGOUT:
			return {
				...state,
				auth_token: '',
				loggedIn: false,
			}
		default:
			return state
	}
}
