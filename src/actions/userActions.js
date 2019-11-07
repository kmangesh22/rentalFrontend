import {
	LOGIN_SENT,
	LOGIN_FULLFILLED,
	LOGIN_REJECTED,
	LOGOUT,
} from './actionTypes'

export function login(json, history) {
	return dispatch => {
		fetch('http://192.168.43.84:8080/login/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(json),
		})
			.then(dispatch(loginSent()))
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					dispatch(loginRejected(res.error))
				} else {
					dispatch(loginFullfilled(res))
					history.push('/home')
				}
			})
			.catch(err => {
				dispatch(loginRejected('Internal Server Error'))
			})
	}
}

export function loginSent() {
	return {
		type: LOGIN_SENT,
	}
}

export function loginFullfilled(res) {
	return {
		type: LOGIN_FULLFILLED,
		payload: res,
	}
}

export function loginRejected(err) {
	return {
		type: LOGIN_REJECTED,
		payload: err,
	}
}

export function logout() {
	return {
		type: LOGOUT,
	}
}
