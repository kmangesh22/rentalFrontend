import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { compose } from 'redux'
import { withRouter, Link } from 'react-router-dom'
import { Form, Button, Input, Icon } from 'antd'
import TopNav from './TopNav'
class LoginPage extends React.Component {
	handleSubmit = e => {
		const { validateFields } = this.props.form
		e.preventDefault()
		console.log('clicked')
		validateFields((errors, values) => {
			// if (errors) return
			console.log('submit success' + JSON.stringify(values))
			this.props.login(
				{
					username: values.email,
					password: values.password,
				},
				this.props.history
			)
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form

		const tailFormItemLayout = {
			wrapperCol: {
				span: 8,
				offset: 8,
			},
		}
		return (
			<div style={{ overflow: 'hidden' }}>
				<TopNav title='Login' />
				<Form
					style={{ marginTop: '10%' }}
					layout='vertical'
					onSubmit={this.handleSubmit}
				>
					<Form.Item hasFeedback>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								},
								{ required: true, message: 'Please input your email!' },
							],
							validateTrigger: 'onBlur',
						})(
							<Input
								prefix={
									<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								placeholder='Email'
							/>
						)}
					</Form.Item>
					<Form.Item hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{ required: true, message: 'Please input your Password!' },
								{ min: 8, message: 'Password must be atleast 8 character' },
							],
						})(
							<Input.Password
								prefix={
									<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								placeholder='Password'
							/>
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type='primary' htmlType='submit'>
							Log in
						</Button>
						Or <Link to='/register'>register now!{this.props.error}</Link>
					</Form.Item>
				</Form>
			</div>
		)
	}
}
const mapDispatchToProps = {
	login,
}
const mapStateToProps = state => ({
	error: state.error,
})

LoginPage = Form.create({ name: 'loginForm' })(LoginPage)

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(LoginPage)
