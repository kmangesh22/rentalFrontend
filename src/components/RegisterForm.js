import { Form, Input, Button } from 'antd'
import React from 'react'

class RegisterForm extends React.Component {
	render() {
		const formItemLayout = {
			labelCol: { span: 2 },
			wrapperCol: { span: 4 },
		}
		const buttonItemLayout = {
			wrapperCol: { span: 2, offset: 4 },
		}
		const { getFieldDecorator } = this.props.form
		return (
			<div>
				<Form layout='vertical'>
					<Form.Item label='Email' {...formItemLayout}>
						{getFieldDecorator('email', {
							rules: [
								{
									required: true,
									message: 'Please Provide a Email',
								},
							],
						})(<Input placeholder='Please input your email' />)}
					</Form.Item>
					<Form.Item {...formItemLayout} label='Password' hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: 'Please input your password!',
								},
							],
						})(<Input.Password visibilityToggle={false} />)}
					</Form.Item>
					<Form.Item {...buttonItemLayout}>
						<Button type='primary'>Submit</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export default Form.create({})(RegisterForm)
