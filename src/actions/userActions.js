import { LOGIN_SENT, LOGIN_FULLFILLED, LOGIN_REJECTED } from './actionTypes'

export function login(json, history) {
	return dispatch => {
		dispatch(loginSent())
		fetch('http://192.168.0.9:8080/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(json),
			mode: 'no-cors',
		})
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					dispatch(loginRejected(res.error))
				} else {
					dispatch(loginFullfilled(res))
					history.push('/')
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

export function loginFullfilled(user) {
	console.log(user)
	return {
		type: LOGIN_FULLFILLED,
		payload: user,
	}
}

export function loginRejected(err) {
	return {
		type: LOGIN_REJECTED,
		payload: err,
	}
}
