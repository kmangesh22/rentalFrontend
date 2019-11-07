import React from 'react'
import { Input, Button } from 'antd'
import TopNav from './TopNav'
//TODO
//create input for comment
//get the id from the state i.e this.props.history.state
//submit a post request to server

export default function Review(props) {
	return (
		<React.Fragment>
			<TopNav title='Review' back='/history' />
			<div>{props.match.params.id}</div>
			<Input.TextArea
				style={{ width: '80%', margin: '11px' }}
				placeholder='Please Enter your Review'
			/>
			<Button style={{ margin: '10px' }} type='primary'>
				Submit
			</Button>
		</React.Fragment>
	)
}
