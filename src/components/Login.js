import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
class LoginPage extends React.Component {
	state = {
		email: '',
		password: '',
	}
	handleUsernameChange = e => {
		this.setState({
			email: e.target.value,
		})
	}
	handlePasswordChange = e => {
		this.setState({
			password: e.target.value,
		})
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log('clicked')
		this.props.login(
			{
				email: this.state.email,
				password: this.state.password,
			},
			this.props.history
		)
	}

	render() {
		return (
			<form
				style={{
					display: 'flex',
					height: '100vh',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onSubmit={this.handleSubmit}
			>
				<h3>{this.props.error}</h3>
				<input
					name='email'
					placeholder='email'
					onChange={this.handleUsernameChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					onChange={this.handlePasswordChange}
				/>
				<input type='submit' name='login' value='Login' />
			</form>
		)
	}
}
const mapDispatchToProps = {
	login,
}
const mapStateToProps = state => ({
	error: state.error,
})

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(LoginPage)
