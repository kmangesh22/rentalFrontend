import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Input, Icon } from 'antd'
import TopNav from './TopNav'
class Register extends React.Component {
	handleSubmit = e => {
		const { validateFields } = this.props.form
		e.preventDefault()
		console.log('clicked')
		validateFields((errors, values) => {
			if (errors) return
			console.log('submit success' + JSON.stringify(values))
			this.props.login(
				{
					email: values.email,
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
			<div style={{ boxSizing: 'border-box', overflow: 'hidden' }}>
				<TopNav title='Register' />
				<Form
					style={{ marginTop: '10%' }}
					layout='vertical'
					onSubmit={this.handleSubmit}
				>
					<Form.Item>
						<Input placeholder='Name' />
					</Form.Item>
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
					<Form.Item hasFeedback>
						{getFieldDecorator('confirmpw', {
							rules: [
								{ required: true, message: 'Please re-input your Password!' },
								{ min: 8, message: 'Password must be atleast 8 character' },
							],
						})(
							<Input.Password
								prefix={
									<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								placeholder='Confirm Password'
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('phone', {
							rules: [
								{ required: true, message: 'Please input your phone number!' },
							],
						})(<Input placeholder='phone' />)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('aadhar', {
							rules: [
								{ required: true, message: 'Please input your aadhar number!' },
							],
						})(<Input placeholder='aadhar' />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type='primary' htmlType='submit'>
							Register
						</Button>
						Or <Link to='/Login'>Already have a account!</Link>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

Register = Form.create({ name: 'loginForm' })(Register)
export default Register
