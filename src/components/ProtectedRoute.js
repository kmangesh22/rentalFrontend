import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function ProtectedRoute({ component: Component, exact, auth_token, ...rest }) {
	return (
		<Route
			{...rest}
			exact={exact}
			render={props => {
				if (auth_token) {
					return <Component {...props} />
				} else {
					return (
						<Redirect
							to={{
								pathname: '/login',
							}}
						/>
					)
				}
			}}
		/>
	)
}

const mapStateToProps = state => ({
	auth_token: state.auth_token,
})

export default connect(mapStateToProps)(ProtectedRoute)
